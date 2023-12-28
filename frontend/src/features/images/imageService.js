import axios from "axios";

// API URL
const API_URL = '/api/vehicles/';

// get ticket notes
const getImages = async (vehicleId, token) => {
    //set the headers for the request
    //the token has to be passed in the headers for the backend to verify the user is logged in and authorized to create a ticket
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + vehicleId + '/images', config);
    return response.data;
};

// getImage function
const getImage = async (imageId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`/api/images/${imageId}`, config);
    return response.data;
};

// uploadImage function
const uploadImage = async (url, vehicleId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.post(`/api/vehicles/${vehicleId}/images`, { url }, config);
    return response.data;
};


// delete image
const deleteImage = async (vehicleId, imageId, token) => {
    //set the headers for the request
    //the token has to be passed in the headers for the backend to verify the user is logged in and authorized to create a ticket
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + vehicleId + '/images/' + imageId, config);
    return response.data;
};

const noteService = {
    getImages,
    getImage,
    uploadImage,
    deleteImage
}
export default noteService;