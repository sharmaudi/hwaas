var express = require('express');
var os = require("os");
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send(`<h1>Hello World!</h1><h5>Hostname: ${os.hostname()}</h5>`);
});

// Listen
var port = process.env.PORT || 4000;
app.listen(port);
console.log('Listening on localhost:'+ port);