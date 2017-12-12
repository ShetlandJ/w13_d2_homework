var express = require("express");
var router = new express.Router();
var path = require('path');
var bands = require('../client/src/models/bands')();

router.use("/bands", require("./bands"))
router.use("/index", require("./bands"))
router.use("/:id", require("./bands"))


router.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "../../client/build/index.html"))
})


module.exports = router;
