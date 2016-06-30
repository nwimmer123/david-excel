// SERVER-SIDE JAVASCRIPT

var express = require('express');
var app = express();

app.use('/',express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// ROUTES

app.get('/', function(req,res) {
  res.render('pages/index');
});

app.get('/faq', function(req,res) {
  res.render('pages/faq');
});


// SERVER 

app.listen(3000);
console.log("I'm up!!")
