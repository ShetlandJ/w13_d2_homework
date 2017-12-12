var bands = require('../client/src/models/band')();

var express = require("express");
var bandRouter = new express.Router();

bandRouter.get('/', function(req, res) {
  res.json({bands});
});

bandRouter.post('/', function(req, res) {
  res.json({bands});
});

module.exports = bandRouter;
