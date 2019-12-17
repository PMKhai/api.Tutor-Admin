var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
var passport  = require('passport');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var skillRouter = require('./routes/skill');
var contractRouter = require('./routes/contract');
require('./config/passport');

var app = express();
// fix cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/skills' , skillRouter)
app.use('/contracts', contractRouter);

mongoose.Promise = Promise;

const run = async() => {
  
    await mongoose.connect('mongodb+srv://admin02:123@cluster1-4vrfk.mongodb.net/Server', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
run().catch(error => console.error(error))

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
