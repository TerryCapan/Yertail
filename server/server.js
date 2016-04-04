var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/../client'));


app.get('*', function(req, res) {
  res.sendfile(path.resolve('client/index.html'));
})

var port = process.env.PORT || 4568;

app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;
