var express = require('express');
var router = express.Router();

const plants = [
  {
    id: 1,
    name: 'Lavanda'
  },
  {
    id: 2,
    name: 'Almendro'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
   // Cookies that have not been signed
  //  console.log('Cookies: ', req.cookies)

   // Cookies that have been signed
  //  console.log('Signed Cookies: ', req.signedCookies)
  // res.render('index', { title: 'Express' });
  res.send('home page')
});



module.exports = router;
