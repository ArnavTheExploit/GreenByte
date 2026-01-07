const express = require('express');
const router = express.Router();
console.log("✅ pickupRoutes.js loaded");
const {
  createPickupRequest,
  getAllPickupRequests,
  updatePickupStatus,
} = require('../controllers/pickupController');

router.post('/request', createPickupRequest);
router.get('/all', getAllPickupRequests);
router.put('/status/:id', updatePickupStatus);

module.exports = router;
