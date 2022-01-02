var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

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
router.get('/api', function(req, res, next) {
   // Cookies that have not been signed
  //  console.log('Cookies: ', req.cookies)
  console.log(req.query)
   // Cookies that have been signed
  //  console.log('Signed Cookies: ', req.signedCookies)
  // res.render('index', { title: 'Express' });
  
  fetch('https://api.unsplash.com/search/photos?page=${this.page}&query=office&client_id=1e-LeDuraaNbPTiwqFaQz6yB6Ug2if84H0B4FsiJ9RE')
  .then(res => res.json())
  .then(json => {
    res.send(json.results);
  });
  // res.send('home page')
});




module.exports = router;
