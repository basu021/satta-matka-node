// helpers/initMysql.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOSTNAME || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DATABASE || '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function executeQuery(sql, values) {
  const [rows, fields] = await pool.execute(sql, values);
  return rows;
}

async function createUsersTable() {
  try {
    // Create users table
    const createUsersTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `;
    await executeQuery(createUsersTableQuery);

    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error.message);
    throw error;
  }
}

async function initDatabase() {
  try {
    // Create tables
    await createUsersTable();

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error.message);
  } finally {
    // Close the MySQL connection pool
    pool.end();
  }
}

module.exports = { initDatabase };
