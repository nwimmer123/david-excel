// SERVER-SIDE JAVASCRIPT

var express = require('express');
var app = express();
var flash = require('connect-flash');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var html = require('html');


// serve static files from public folder
app.use('/',express.static(__dirname + '/public'));
app.use('/',express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

// ROUTES

app.get('/', function(req,res) {
  res.render('pages/index');
});

// app.get('/faq', function(req,res) {
//   res.send('pages/faq');
// });

app.get('/faq', function homepage (req, res) {
  res.sendFile(__dirname + 'pages/faq.ejs');
});

// SERVER 

app.listen(3000);
console.log("I'm up!!")
