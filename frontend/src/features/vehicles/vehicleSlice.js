import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import vehicleService from './vehicleService';

const initialState = {
    //vehicles array for when theres multiple vehicles
    vehicles: [],
    //vehicle object for when theres only one vehicle
    vehicle: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new vehicle
export const createVehicle = createAsyncThunk(
    'vehicles/create',
    //thunkAPI can get the state from other slices. in this case, we get the jwt from the auth slice in line 21.
    async (vehicleData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await vehicleService.createVehicle(vehicleData, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            //return the error message as a rejected promise to be used in the rejected case of createVehicle
            return thunkAPI.rejectWithValue(message);
        }
    });


// get user vehicles
export const getVehicles = createAsyncThunk(
    'vehicles/getAll',
    //thunkAPI can get the state from other slices. in this case, we get the jwt from the auth slice in line 21.
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await vehicleService.getVehicles(token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            //return the error message as a rejected promise to be used in the rejected case of createVehicle
            return thunkAPI.rejectWithValue(message);
        }
    });

// get user vehicle
export const getVehicle = createAsyncThunk(
    'vehicles/get',
    //thunkAPI can get the state from other slices. in this case, we get the jwt from the auth slice in line 21.
    async (vehicleId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await vehicleService.getVehicle(vehicleId, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            //return the error message as a rejected promise to be used in the rejected case of createVehicle
            return thunkAPI.rejectWithValue(message);
        }
    });

// close vehicle
export const deleteVehicle = createAsyncThunk(
    'vehicles/delete',
    //thunkAPI can get the state from other slices. in this case, we get the jwt from the auth slice in line 21.
    async (vehicleId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await vehicleService.closeVehicle(vehicleId, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            //return the error message as a rejected promise to be used in the rejected case of createVehicle
            return thunkAPI.rejectWithValue(message);
        }
    });


export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        // reset state after register
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            //create vehicle
            //if the promise is pending, isLoading is set to true
            .addCase(createVehicle.pending, (state) => {
                state.isLoading = true;
            })
            //if the promise is fulfilled, isLoading is set to false and isSuccess is set to true
            .addCase(createVehicle.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            //if the promise is rejected, isLoading is set to false, isError is set to true, and message is set to the payload
            .addCase(createVehicle.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            //get vehicles
            //if the promise is pending, isLoading is set to true
            .addCase(getVehicles.pending, (state) => {
                state.isLoading = true;
            })
            //if the promise is fulfilled, isLoading is set to false, isSuccess is set to true, and vehicles is set to the payload
            .addCase(getVehicles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.vehicles = action.payload;
            })
            //if the promise is rejected, isLoading is set to false, isError is set to true, and message is set to the payload
            .addCase(getVehicles.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            //get vehicle
            //if the promise is pending, isLoading is set to true
            .addCase(getVehicle.pending, (state) => {
                state.isLoading = true;
            })
            //if the promise is fulfilled, isLoading is set to false, isSuccess is set to true, and vehicles is set to the payload
            .addCase(getVehicle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.vehicle = action.payload;
            })
            .addCase(getVehicle.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            // if the promise is fulfilled and the vehicle is deleted, the vehicle is removed from the vehicles array
            .addCase(deleteVehicle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.vehicles.map((vehicle) => vehicle._id === action.payload._id ? (vehicle.status = 'Closed') : vehicle);

            });



    }

});
//export the action reducers
export const { reset } = vehicleSlice.actions;
//export the reducer
export default vehicleSlice.reducer;