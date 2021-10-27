// mysql dependency
var mysql = require('mysql2');

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'plants',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;