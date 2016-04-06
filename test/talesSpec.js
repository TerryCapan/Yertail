var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var expect = chai.expect;
var should = chai.should();
var request = require('request');

describe('server', function() {
  it('should respond to GET requests for main page with a 200 status code', function(done) {
    request('http://127.0.0.1:5000', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('should respond to GET requests for /api/tales with a 200 status code', function(done) {
    request('http://127.0.0.1:5000/api/tales', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    })
  })
  it('should accept POST requests to /api/tales', function(done) {
    var requestParams = {method: 'POST',
      uri: 'http://127.0.0.1:5000/api/tales',
      json: {
        username: 'Jono',
        message: 'Do my bidding!'}
    };

    request(requestParams, function(error, response, body) {
      expect(response.statusCode).to.equal(201);
      done();
    });
  });
});