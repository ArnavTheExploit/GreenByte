/**
 * PickupRequest Model
 * Defines the schema for e-waste pickup requests in MongoDB
 */

const mongoose = require('mongoose');

/**
 * PickupRequest Schema
 * Contains all fields required for an e-waste pickup request
 */
const pickupRequestSchema = new mongoose.Schema(
  {
    // Name of the person requesting pickup
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true, // Removes whitespace from both ends
    },

    // Email address of the requester
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true, // Converts email to lowercase
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'], // Basic email validation
    },

    // Phone number of the requester
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },

    // Type of electronic device (e.g., laptop, mobile, printer)
    deviceType: {
      type: String,
      required: [true, 'Device type is required'],
      trim: true,
    },

    // Number of devices to be picked up
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'], // Minimum value validation
    },

    // Pickup address
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },

    // Status of the pickup request
    // Default status is 'pending' when a new request is created
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'], // Allowed status values
      default: 'pending',
    },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Create and export the PickupRequest model
// This model will be used to interact with the 'pickuprequests' collection in MongoDB
const PickupRequest = mongoose.model('PickupRequest', pickupRequestSchema);

module.exports = PickupRequest;

