const Image = require('../models/Image');
const asyncHandler = require('express-async-handler');
const Vehicle = require('../models/vehicleModel');

const getImages = asyncHandler(async (req, res) => {
    const vehicleId = req.params.vehicleId; // Assuming you're passing the vehicleId as a parameter
    const images = await Image.find({ vehicle: vehicleId }); // Find images related to the specified vehicle
    res.status(200).json({ images });
});

// getImage function
const getImage = asyncHandler(async (req, res) => {
    const imageId = req.params.id;
    const image = await Image.findById(imageId);
    if (!image) {
        res.status(404);
        throw new Error('Image not found');
    }
    res.status(200).json({ image });
});

// uploadImage function
const uploadImage = asyncHandler(async (req, res) => {
    const { url } = req.body;
    const vehicleId = req.params.vehicleId;

    if (!url) {
        res.status(400);
        throw new Error('Please provide a valid URL');
    }

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
        res.status(404);
        throw new Error('Vehicle not found');
    }

    const image = new Image({
        url, // Utilize the provided URL when creating the image
        vehicle: vehicleId,
    });

    const createdImage = await image.save();
    res.status(201).json({ createdImage });
});

// deleteImage function
const deleteImage = asyncHandler(async (req, res) => {
    const imageId = req.params.id;
    const image = await Image.findById(imageId);
    if (!image) {
        res.status(404);
        throw new Error('Image not found');
    }
    await image.deleteOne();
    res.status(200).json({ message: 'Image removed' });
});


module.exports = {
    getImages,
    getImage,
    uploadImage,
    deleteImage,
};
