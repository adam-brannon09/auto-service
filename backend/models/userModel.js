// Schema for user
// Import mongoose
const mongoose = require('mongoose');

// Create the schema
const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please enter your first name'],
            trim: true,
        },
        lastName: {
            type: String,
            required: [true, 'Please enter your last name'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please enter your email'],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter a password'],
            trim: true,
        },
    },
    // Add timestamps
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);