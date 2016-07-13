var express = require('express');
var app = express();
var html = require('html');

app.use('/',express.static(__dirname + '/public'));

// ROUTES

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// SERVER 

app.listen(3000);
console.log("I'm up!!")
