var express = require('express');
var app = express();

// serve static files from public folder
app.use('/',express.static(__dirname + '/public'));
app.use('/',express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

// ROUTES

app.get('/', function(req,res) {
  res.render('pages/index');
});

// SERVER 

app.listen(3000);
console.log("I'm up!!")
