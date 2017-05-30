// express server setup
var express = require('express');

// Create our app
var app = express();

// Setup a public directory
app.use(express.static('public'));

// Turn on the listening
app.listen(3000, function(){
  console.log("Express server is up at http://localhost:3000/");
})
