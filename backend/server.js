const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

//Connect to MongoDB
connectDB();
//Initialize Express
const app = express();
// Middleware to send JSON data to the server
app.use(express.json());
// Middleware to parse the URL-encoded data from the server
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});