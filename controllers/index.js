var express = require("express");
var router = new express.Router();
var path = require('path');
var band = require('../client/src/models/band');
var bands = require('../client/src/models/bands')();

router.use("/bands", require("./bands"))

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "../../client/build/index.html"))
})

router.post("/", function(req, res){
  db.collection("bands").save(req.body, function(err, result){
    if (err){
      return console.log(err);
    }
    console.log("Saved to database");
    res.redirect("/")
  });
})

module.exports = router;
