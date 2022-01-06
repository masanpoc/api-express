// mysql dependency
var mysql = require('mysql2');

const path = require('path');
// specify the relative path to .env file
require('dotenv').config({ 
   path: path.resolve(__dirname, '../.env') 
})

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    database: 'weather',
    password: process.env.DB_PASSWORD
};


// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;