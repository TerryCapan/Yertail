var mongoose = require('mongoose');
var Q = require('q');


var TaleSchema = new mongoose.Schema({
  tale: [],
  username: String
})

var Tale = mongoose.model('Tale', TaleSchema);

var createTale = Q.nbind(Tale.create, Tale);
var findAllTales = Q.nbind(Tale.find, Tale);

module.exports = {
  addTale: function(req, res, next) {
    createTale(req.body)
      .then(function (createdTale) {
        if (createdTale) {
          res.json(createdTale);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  getTales: function (req, res, next) {
    findAllTales({})
      .then(function(tales) {
        res.json(tales);
      })
      .fail(function (error) {
      next(error);
    });
  }
};