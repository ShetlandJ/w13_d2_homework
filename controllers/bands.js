var band = require('../client/src/models/band');
var bands = require('../client/src/models/bands')();


var express = require("express");
var bandRouter = new express.Router();

bandRouter.get('/', function(req, res) {

  db.collection("bands").find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});

bandRouter.post('/', function(req, res) {
  db.collection("bands").save(req.body, function(err, result){
    if (err){
      return console.log(err);
    }
    console.log("Saved to database");
    res.redirect("/")
  });
});

bandRouter.post('/', function(req, res) {
    db.collection("bands").remove();
    res.redirect('/');
});

module.exports = bandRouter;
