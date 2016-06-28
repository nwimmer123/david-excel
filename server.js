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

// app.get('/faq', function(req,res) {
//   res.send('pages/faq');
// });

app.get('/faq', function homepage (req, res) {
  res.sendFile(__dirname + 'pages/faq.ejs');
});

// SERVER 

app.listen(3000);
console.log("I'm up!!")
