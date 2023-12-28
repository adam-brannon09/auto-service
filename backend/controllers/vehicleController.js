const asyncHandler = require('express-async-handler');
// Import the models
const User = require('../models/userModel');
const Vehicle = require('../models/vehicleModel');

// @desc    Get user Vehicles
// @route   GET /api/vehicles
// @access  Private
const getVehicles = asyncHandler(async (req, res) => {
    // Get the user from the database using the id from JWT
    const user = await User.findById(req.user.id)
    // If the user is not found, throw an error
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const vehicles = await Vehicle.find({ user: req.user.id })

    res.status(200).json(vehicles)
})

// @desc    Get Individual Vehicle
// @route   GET /api/vehicles/:id
// @access  Private
const getVehicle = asyncHandler(async (req, res) => {
    // Get the user from the database using the id from JWT
    const user = await User.findById(req.user.id)
    // If the user is not found, throw an error
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Get the vehicle from the database using the id from the params
    const vehicle = await Vehicle.findById(req.params.id)
    // If the vehicle is not found, throw an error
    if (!vehicle) {
        res.status(404)
        throw new Error('Vehicle not found')
    }
    // If the vehicle does not belong to the user, throw an error
    if (vehicle.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not authorized')

    }
    res.status(200).json(vehicle)
})

// @desc    Create New Vehicle
// @route   POST /api/vehicles
// @access  Private
const createVehicle = asyncHandler(async (req, res) => {
    //destructure the request body, get the product and description from the body(user input)
    const { make, model, year, trim, color, engine, fuel, transmission, transmissionSpeeds, driveType, milesOrHours, mileage, vinSerial, vinSerialNumber, licensePlate, images } = req.body
    // If the product or description is not provided, throw an error
    if (!make || !model || !year || !engine || !fuel) {
        res.status(400)
        throw new Error('Please fill all required fields')
    }

    // Get the user from the database using the id from JWT
    const user = await User.findById(req.user.id)
    // If the user is not found, throw an error
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Create the vehicle
    const vehicle = await Vehicle.create({
        user: req.user.id,
        make,
        model,
        year,
        trim,
        color,
        engine,
        fuel,
        transmission,
        transmissionSpeeds,
        driveType,
        milesOrHours,
        mileage,
        vinSerial,
        vinSerialNumber,
        licensePlate,
    })

    res.status(200).json(vehicle)
})

// @desc    Delete Individual Vehicle
// @route   DELETE /api/vehicles/:id
// @access  Private
const deleteVehicle = asyncHandler(async (req, res) => {
    // Get the user from the database using the id from JWT
    const user = await User.findById(req.user.id)
    // If the user is not found, throw an error
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Get the vehicle from the database using the id from the params
    const vehicle = await Vehicle.findById(req.params.id)
    // If the vehicle is not found, throw an error
    if (!vehicle) {
        res.status(404)
        throw new Error('Vehicle not found')
    }
    // If the vehicle does not belong to the user, throw an error
    if (vehicle.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not authorized')
    }

    // Delete the vehicle
    await vehicle.deleteOne()
    res.status(200).json({ success: true, })
})

// @desc    Update Individual Vehicle
// @route   PUT /api/vehicles/:id
// @access  Private
const updateVehicle = asyncHandler(async (req, res) => {
    // Get the user from the database using the id from JWT
    const user = await User.findById(req.user.id)
    // If the user is not found, throw an error
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Get the vehicle from the database using the id from the params
    const vehicle = await Vehicle.findById(req.params.id)
    // If the vehicle is not found, throw an error
    if (!vehicle) {
        res.status(404)
        throw new Error('Vehicle not found')
    }
    // If the vehicle does not belong to the user, throw an error
    if (vehicle.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not authorized')

    }
    // Update the vehicle
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
        req.params.id,
        req.body,
    )
    // Return the updated vehicle
    res.status(200).json(updatedVehicle)
})

module.exports = {
    getVehicles,
    getVehicle,
    createVehicle,
    deleteVehicle,
    updateVehicle
}