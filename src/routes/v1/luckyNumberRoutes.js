// backend/src/routes/v1/luckyNumberRoutes.js
const express = require('express');
const luckyNumberController = require('../../controllers/luckyNumberController');

const router = express.Router();

// Route for adding lucky numbers
router.post('/add', luckyNumberController.addLuckyNumber);

module.exports = router;