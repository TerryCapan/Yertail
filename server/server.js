var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var controller = require ('./taleModel-controller.js')
var app = express();

mongoose.connect('mongodb://TerryCapanTwo:MongoPass88@ds015690.mlab.com:15690/heroku_6gkv8hcv')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/../client'));

app.route('/api/tales')
  .get(function(req, res) {
    res.send('Get a random book');
    // controller.getTales(req, res)
  })
  .post(controller.addTale)

app.get('*', function(req, res) {
  res.sendfile(path.resolve('client/index.html'));
})

var port = process.env.PORT || 4568;

app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;
