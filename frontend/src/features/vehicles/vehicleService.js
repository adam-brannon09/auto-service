import axios from 'axios';

// API URL
const API_URL = '/api/vehicles/';


// Create new vehicle
const createVehicle = async (vehicleData, token) => {
    //set the headers for the request
    //the token has to be passed in the headers for the backend to verify the user is logged in and authorized to create a vehicle
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(API_URL, vehicleData, config);
    return response.data;
};

// Get user vehicles
const getVehicles = async (token) => {
    //set the headers for the request
    //the token has to be passed in the headers for the backend to verify the user is logged in and authorized to create a vehicle
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config);
    return response.data;
};

const getVehicle = async (vehicleId, token) => {
    //set the headers for the request
    //the token has to be passed in the headers for the backend to verify the user is logged in and authorized to create a vehicle
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + vehicleId, config);
    return response.data;
};
// Update vehicle
const updateVehicle = async (vehicleId, token) => {
    //set the headers for the request
    //the token has to be passed in the headers for the backend to verify the user is logged in and authorized to create a vehicle
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + vehicleId, config);
    return response.data;
};

// Delete vehicle
const deleteVehicle = async (vehicleId, token) => {
    //set the headers for the request
    //the token has to be passed in the headers for the backend to verify the user is logged in and authorized to create a vehicle
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + vehicleId, config);
    return response.data;
};


//export functions so they can be used in vehicle slice
const vehicleService = {
    createVehicle,
    getVehicles,
    getVehicle,
    updateVehicle,
    deleteVehicle

};
//export functions so they can be used in vehicle slice
export default vehicleService;