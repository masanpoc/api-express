//  module is used for generating errors for Node.js applications
var createError = require('http-errors');
// express framework
var express = require('express');
// node path file system
var path = require('path');
// read and send cookies
var cookieParser = require('cookie-parser');
// HTTP request logger middleware
var logger = require('morgan');


// importing route files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var plantsRouter = require('./routes/plants');

// The app variable contains all of the settings and routes for your application. This object glues together your application
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// express configured to use middleware
app.use(logger('dev'));
// bodyParser.json() works the same, just parses the req from json to js, like JSON.parse() *not JSON.stringify()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));

// adding route files to our app
app.use('/home', indexRouter);
app.use('/users', usersRouter);
app.use('/plants', plantsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
