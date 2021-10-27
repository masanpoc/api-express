var express = require('express');
var router = express.Router();

// Load the MySQL pool connection
var pool = require('../data/config');

// Display all plants
router.get('/', (request, response) => {
  pool.query('SELECT * FROM plants', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});

module.exports = router;
