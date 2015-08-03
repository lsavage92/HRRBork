var express = require('express');

var app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/static'));
});

module.exports = app;
