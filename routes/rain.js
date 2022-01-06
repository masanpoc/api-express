var express = require('express');
var router = express.Router();

// Load the MySQL pool connection
var pool = require('../data/config');

// Display all rain_days
router.get('/', (request, response) => {
  pool.query('SELECT * FROM rain_days ORDER BY Field(month,  monthname(str_to_date(1, "%m")),    monthname(str_to_date(2, "%m")),       monthname(str_to_date(3, "%m")),       monthname(str_to_date(4, "%m")),       monthname(str_to_date(5, "%m")),       monthname(str_to_date(6, "%m")),      monthname(str_to_date(7, "%m")),       monthname(str_to_date(8, "%m")),      monthname(str_to_date(9, "%m")),      monthname(str_to_date(10, "%m")),      monthname(str_to_date(11, "%m")),     monthname(str_to_date(12, "%m")) ) LIMIT 0, 1000', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});

module.exports = router;