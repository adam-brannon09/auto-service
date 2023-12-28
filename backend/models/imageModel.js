const mongoose = require('mongoose');

const imageSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        // If you need to associate images with a specific user or any other entity
        vehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle',
        },
        // Define properties related to the image
        url: {
            type: String,
        },



    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Image', imageSchema);
