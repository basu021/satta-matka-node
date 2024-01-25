// routes/v1/index.js
const express = require('express');
const router = express.Router();

// Define a route for handling empty requests
router.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

module.exports = router;
