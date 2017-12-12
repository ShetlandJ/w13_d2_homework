var Band = require('./band');

var Bands = function(){

  var band1 = new Band({
    name: "Pearl Jam",
    genre: "Rock"
  });

  return [band1];
}

module.exports = Bands;
