var express = require('express');
var router = express.Router();

// Load the MySQL pool connection
var pool = require('../data/config');

// Send json object with following fields: month, avg_tmp_coruna, avg_tmp_malaga, rain_days_coruna, rain_days_malaga 
router.get('/', (request, response) => {
  // look for api key
  if(request.query.key==process.env.API_KEY_MYSQL){
    pool.query('SELECT * FROM weather_lc_mg ORDER BY Field(month,  monthname(str_to_date(1, "%m")),    monthname(str_to_date(2, "%m")),       monthname(str_to_date(3, "%m")),       monthname(str_to_date(4, "%m")),       monthname(str_to_date(5, "%m")),       monthname(str_to_date(6, "%m")),      monthname(str_to_date(7, "%m")),       monthname(str_to_date(8, "%m")),      monthname(str_to_date(9, "%m")),      monthname(str_to_date(10, "%m")),      monthname(str_to_date(11, "%m")),     monthname(str_to_date(12, "%m")) ) LIMIT 0, 1000', (error, result) => {
        if (error) throw error;

        response.json(result);
    });
  }
  else {
    let error = 'OAuth error: The access token is invalid'
    response.status(401).json(error);
  }
});

module.exports = router;