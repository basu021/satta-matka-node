// backend/src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/v1/authRoutes');  // Correct import
const authMiddleware = require('./middleware/authMiddleware');
const luckyNumberRoutes = require('./routes/v1/luckyNumberRoutes');


const app = express();
const port = 3001;

// MySQL database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sattamtka',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(bodyParser.json());

// API versioning middleware
app.use('/api/v1', authMiddleware); // Add authentication middleware for v1

// API routes
// app.use('/api/v1', authRoutes);  // Use authRoutes instead of v1Routes

app.use('/api/v1/luckyNumbers', luckyNumberRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
