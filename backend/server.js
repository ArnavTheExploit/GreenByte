/**
 * Express Server Setup
 * Main entry point for the GreenByte backend API
 */

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./db');
const pickupRoutes = require('./routes/pickupRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

// Initialize Express application
const app = express();

// Get port from environment variables or use default port 5000
const PORT = process.env.PORT || 5050;


// Connect to MongoDB database
connectDB();

// Middleware Configuration

// Security headers
app.use(helmet());

// Logging
app.use(morgan('dev'));

// CORS (Cross-Origin Resource Sharing) middleware
// Allows frontend applications from different origins to access this API
app.use(cors());

// Express JSON parser middleware
// Parses incoming requests with JSON payloads
app.use(express.json());

// Express URL-encoded parser middleware
// Parses incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// API Routes

// Health check endpoint - useful for testing if server is running
app.get('/', (req, res) => {
  res.json({
    message: 'GreenByte Backend API is running!',
    version: '1.0.0',
  });
});

// Mount pickup routes at /api/pickup
// All routes defined in pickupRoutes.js will be prefixed with /api/pickup
app.use('/api/pickup', pickupRoutes);

// 404 Handler - handles requests to routes that don't exist
app.use('*', (req, res) => {
  res.status(404);
  throw new Error('Route not found');
});

// Error Handling Middleware
// Catches any errors that occur during request processing
app.use(errorHandler);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api/pickup`);
});
