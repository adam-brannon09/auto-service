import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageService from './imageService';

const initialState = {
    images: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const getImages = createAsyncThunk(
    'images/getAll',
    async (vehicleId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await imageService.getImages(vehicleId, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getImage = createAsyncThunk(
    'images/get',
    async ({ id, vehicleId }, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await imageService.getImageById(id, vehicleId, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const uploadImage = createAsyncThunk(
    'images/update',
    async ({ url, vehicleId }, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await imageService.uploadImage(url, vehicleId, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const deleteImage = createAsyncThunk(
    'images/delete',
    async (imageId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await imageService.deleteImage(imageId, token);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getImages.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getImages.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.images = action.payload;
            })
            .addCase(getImages.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(uploadImage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.images.push(action.payload);
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteImage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteImage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                // Remove the deleted image from the state
                state.images = state.images.filter(image => image.id !== action.payload);
            })
            .addCase(deleteImage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
});

export const { reset } = imageSlice.actions;
export default imageSlice.reducer;
