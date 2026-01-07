/**
 * Database Connection Module
 * This file handles the MongoDB database connection using Mongoose
 */

const mongoose = require("mongoose");
require("dotenv").config();

/**
 * Connect to MongoDB database
 * Uses the MONGODB_URI from environment variables
 */
const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas using connection string from .env
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    // Log success message with connection host
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error if connection fails
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit the process if database connection fails
    process.exit(1);
  }
};

// Export the connectDB function so it can be used in server.js
module.exports = connectDB;
