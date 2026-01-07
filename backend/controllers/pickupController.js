const PickupRequest = require('../models/PickupRequest');

// @desc    Submit a new e-waste pickup request
// @route   POST /api/pickup/request
// @access  Public
const createPickupRequest = async (req, res, next) => {
    try {
        const { name, email, phone, deviceType, quantity, address } = req.body;

        if (!name || !email || !phone || !deviceType || !quantity || !address) {
            res.status(400);
            throw new Error('Please provide all required fields');
        }

        const pickupRequest = new PickupRequest({
            name,
            email,
            phone,
            deviceType,
            quantity,
            address,
        });

        const savedRequest = await pickupRequest.save();

        res.status(201).json({
            success: true,
            message: 'Pickup request submitted successfully',
            data: savedRequest,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Fetch all pickup requests
// @route   GET /api/pickup/all
// @access  Admin
const getAllPickupRequests = async (req, res, next) => {
    try {
        const allRequests = await PickupRequest.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: allRequests.length,
            data: allRequests,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update the status of a pickup request
// @route   PUT /api/pickup/status/:id
// @access  Admin
const updatePickupStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            res.status(400);
            throw new Error('Please provide a status to update');
        }

        const allowedStatuses = ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'];
        if (!allowedStatuses.includes(status)) {
            res.status(400);
            throw new Error(`Invalid status. Allowed values are: ${allowedStatuses.join(', ')}`);
        }

        const updatedRequest = await PickupRequest.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!updatedRequest) {
            res.status(404);
            throw new Error('Pickup request not found');
        }

        res.status(200).json({
            success: true,
            message: 'Pickup request status updated successfully',
            data: updatedRequest,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPickupRequest,
    getAllPickupRequests,
    updatePickupStatus,
};
