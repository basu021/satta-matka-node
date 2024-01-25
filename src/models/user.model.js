// models/user.js

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOSTNAME || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DATABASE || 'your_database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function executeQuery(sql, values) {
  const [rows, fields] = await pool.execute(sql, values);
  return rows;
}

const userQueries = {
    insertUser: 'INSERT INTO users (email, password) VALUES (?, ?)',
  getUserByEmail: 'SELECT * FROM users WHERE email = ?',
};

const User = {
  createUser: async (username, email, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await executeQuery(userQueries.insertUser, [email, hashedPassword]);
    return result.insertId;
  },

  getUserByEmail: async (email) => {
    try {
      const [user] = await executeQuery(userQueries.getUserByEmail, [email]);

      if (!user || user.length === 0) {
        // No user found with the given email
        return null;
      }

      return user[0];
    } catch (error) {
      console.error('Error in getUserByEmail:', error);
      throw error;
    }
  },

  // You can add more methods as needed, such as updating user details, etc.
};

module.exports = User;
