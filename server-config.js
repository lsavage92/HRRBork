var express = require('express');

var handler = require('./lib/request-handler');

var app = express();

app.configure(function() {
  app.use(express.static('static'));
});

module.exports = app;
