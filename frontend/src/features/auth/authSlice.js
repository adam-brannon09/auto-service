import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

//Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

// Define the initial state 
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// Define the thunk that handles the incoming API response
// Register User
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            //refers to the register function in authService
            return await authService.register(user);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    });
// Define the thunk that handles the incoming API response
// Login User
export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            return await authService.login(user);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    });

//Logout User
export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await authService.logout();
    });

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // reset state after register
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            //Remove user from local storage and set user state to null
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })

    }
});
// Export the action reducers
export const { reset } = authSlice.actions;
// Export the reducer
export default authSlice.reducer;