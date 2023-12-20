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
        type: {
            type: String,
            required: [true, 'Please select from the following:'],
            // Add an enum validator to make sure the product is one of the following
            enum: ['auto', 'motorcycle', 'boat', 'rv', 'tractor', 'other'],
        },
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
            required: [true, 'Please enter the color'],
        },
        engine: {
            type: String,
        },
        transmission: {
            type: String,
            enum: ['automatic', 'manual', 'n/a', 'other'],
        },

        milesOrHours: {
            type: String,
            required: [true, 'Please select from the following:'],
            enum: ['miles', 'hours'],
        },
        mileage: {
            type: Number,
        },
        hours: {
            type: Number,
        },
        vinSerial: {
            type: String,
            enum: ['vin', 'serial'],
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