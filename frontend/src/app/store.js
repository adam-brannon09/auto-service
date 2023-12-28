import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import vehicleReducer from '../features/vehicles/vehicleSlice';
import imageReducer from '../features/images/imageSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        vehicles: vehicleReducer,
        images: imageReducer
    },
});
