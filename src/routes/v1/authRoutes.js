// backend/src/routes/v1/authRoutes.js
const express = require('express');
const authController = require('../../controllers/authController');

const router = express.Router();

// Route for user registration
router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

// Route for user logout (optional)
router.post('/logout', authController.logout);

module.exports = router;