var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

// links from external rest api
// goal: send json data with 2 fields: one with data necessary for chart 3 & another one with data necessary for chart 4
const links = [
  'link1',
  'link2'
]


/* GET home page. */
router.get('/', function(request, response, next) {
   // Cookies that have not been signed
  //  console.log('Cookies: ', req.cookies)
  // console.log(req.query)
   // Cookies that have been signed
  //  console.log('Signed Cookies: ', req.signedCookies)
  // res.render('index', { title: 'Express' });
   // look for api key
  if(request.query.key==process.env.API_KEY_API){
    fetch('https://api.unsplash.com/search/photos?page=${this.page}&query=office&client_id=1e-LeDuraaNbPTiwqFaQz6yB6Ug2if84H0B4FsiJ9RE')
    .then(res => res.json())
    .then(json => {
      response.send(json.results);
    });
  }
  else {
    let error = 'OAuth error: The access token is invalid'
    response.status(401).json(error);
  }
});




module.exports = router;
