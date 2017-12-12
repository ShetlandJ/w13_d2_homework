var bands = require('../client/src/models/bands')();
var Film = require('../client/src/models/band');
var Review = require('../client/src/models/review');

var express = require("express");
var bandRouter = new express.Router();

bandRouter.get('/', function(req, res) {
  res.json({bands});
});


module.exports = bandRouter
