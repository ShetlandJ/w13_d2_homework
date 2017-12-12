var express = require("express");
var router = new express.Router();
var path = require('path');

router.use("/bands", require("./bands"))

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/bands", function(err, database){
  if(err){
    return console.log(err);
  }
  db = database;
  console.log("Connected to db");
});

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "../../client/build/index.html"))
})

router.post("/", function(req, res){
  res.sendFile(path.join(__dirname + "../../client/build/index.html"))
})

module.exports = router;
