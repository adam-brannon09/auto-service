// Schema for vehicles
// Import mongoose
const mongoose = require('mongoose');

// Create the schema
const vehicleSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            // Reference the User model with the ref keyword. This will allow access to that user's information from the vehicle model
            ref: 'User',
        },
        // type: {
        //     type: String,
        //     required: [true, 'Please select from the following:'],
        //     // Add an enum validator to make sure the product is one of the following
        //     enum: ['auto', 'motorcycle', 'rv', 'boat', 'aircraft', 'tractor', 'heavy equipment', 'other'],
        // },
        make: {
            type: String,
            required: [true, 'Please enter the make'],
        },
        model: {
            type: String,
            required: [true, 'Please enter the model'],
        },
        year: {
            type: Number,
            required: [true, 'Please enter the year'],
        },
        trim: {
            type: String,
        },
        color: {
            type: String,
        },
        engine: {
            type: String,
            required: [true, 'Please enter the engine'],
            enum: ['I4', 'V6', 'V8', 'V10', 'Electric Motors', 'Other'],
        },
        fuel: {
            type: String,
            required: [true, 'Please select from the following:'],
            enum: ['Gas', 'Diesel', 'Hybrid', 'Electric'],
        },
        transmission: {
            type: String,
            enum: ['Automatic', 'Manual', 'n/a', 'Other'],
        },
        transmissionSpeeds: {
            type: Number,
        },
        driveType: {
            type: String,
            enum: ['4x4', '4x2', 'AWD', 'FWD', 'RWD'],
        },
        milesOrHours: {
            type: String,
            enum: ['Miles', 'Hours'],
        },
        mileage: {
            type: Number,
        },
        vinSerial: {
            type: String,
            enum: ['VIN', 'Serial'],
        },
        vinSerialNumber: {
            type: String,

        },
        licensePlate: {
            type: String,
        },

    },
    // Add timestamps
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);