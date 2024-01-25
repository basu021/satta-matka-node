// backend/src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const secretKey = '9LQP3TqJYO3P/bR0cGFXXbvVbKw1XHxFf972VUwrEb8='; // Replace with a secure secret key

const authMiddleware = (req, res, next) => {
  // const token = req.header('Authorization');

  // if (!token) return res.status(401).json({ message: 'Unauthorized' });

  // jwt.verify(token, secretKey, (err, user) => {
  //   if (err) return res.status(403).json({ message: 'Forbidden' });

  //   req.user = user;
  //   next();
  // });
};

module.exports = authMiddleware;
