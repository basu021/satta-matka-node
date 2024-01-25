// backend/src/controllers/authController.js
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const secretKey = '9LQP3TqJYO3P/bR0cGFXXbvVbKw1XHxFf972VUwrEb8='; // Replace with a secure secret key

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sattamtka',
});

// User registration
exports.register = (req, res) => {
  // Implement user registration logic here
  // Validate user input, insert into the database, etc.
  // Respond with appropriate status and message
};

// User login
exports.login = (req, res) => {
  const { username, password } = req.body;

  // For testing purposes, set a default username and password
  const testUsername = 'test';
  const testPassword = 'test';

  // Debug statement
  console.log('Generating token for user:', username);

  // Check if the provided credentials match the default test values
  if (username === testUsername && password === testPassword) {
    // If valid, generate a JWT token and send it in the response
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

      // Debug statement
  console.log('Generated token:', token);
    return res.json({ token });
  }

  // If credentials are invalid, respond with an error
  console.error('Invalid credentials');
  return res.status(401).json({ message: 'Invalid credentials' });
};

// User logout (optional)
exports.logout = (req, res) => {
  // Implement user logout logic here (if needed)
  // For example, invalidate the current token on the client-side
  res.json({ message: 'Logout successful' });
};
