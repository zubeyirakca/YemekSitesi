var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hunkarbegendi=require('./routes/hunkarbegendi');
var anasay=require('./routes/anasay');
var hakki=require('./routes/hakkimizda');
var bulgur=require('./routes/bulgurpilavi');
var kurabiye=require('./routes/yemekilk')
var kebap=require('./routes/kebap');
var muffin=require('./routes/muffin');
var lazanya=require('./routes/lazanya');
var pancake=require('./routes/pancake');
var kek=require('./routes/kek')
var app = express();
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/giris', usersRouter);
app.use('/bulgurpilavi',bulgur);
app.use('/anasayfa',anasay);
app.use('/hakkimizda',hakki);
app.use('/kurabiye',kurabiye);
app.use('/kebap',kebap);
app.use('/muffin',muffin);
app.use('/lazanya',lazanya);
app.use('/pancake',pancake);
app.use('/kek',kek);
app.use('/hunkarbegendi',hunkarbegendi)
module.exports = app;

app.listen(3000,() => {console.log("System Up")});
