var express = require('express');
var router = express.Router();

// Load the MySQL pool connection
var pool = require('../data/config');

// select * userTable from url/userId
router.get('/', (request, response) => {
  pool.query('SELECT * FROM userTable', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});

// add new plant to userTable from plant name, copied from plants table
router.post('/:name', function(req, res, next){
  var name = req.params.name;
  pool.query('insert into userTable (name) select name from plants where name = ?', name, (error, result) => {
    if (error) throw error;

    res.status(201).send(`Plant added with ID: ${result.insertId}`);
  });
})

// delete plant in userTable from plant name
router.delete('/:name', function(req, res, next){
  var name = req.params.name;
  pool.query('DELETE FROM userTable WHERE name = ?', name, (error, result) => {
    if (error) throw error;

    res.send('User deleted.');
  });
})

// update plant in userTable from plant name
router.put('/:name/:quantity', function(req, res, next){
  var name = req.params.name;
  var quantity= req.params.quantity;
  pool.query('UPDATE userTable SET quantity=? WHERE name like ?', [quantity, name], (error, result) => {
    if (error) throw error;

    res.send(result);
  });
})

module.exports = router;
