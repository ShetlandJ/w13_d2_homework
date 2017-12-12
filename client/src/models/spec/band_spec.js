var assert = require("assert")
var Band = require("../band.js");

describe( "Band", function(){

  var recordCollector;

  beforeEach(function(){
    band = new Band("The Menzingers", "Punk Rock");
    console.log(band);
  });

  it("should have a name", function(){
    assert.strictEqual(band.name, "The Menzingers");
  });

  it("should have a genre", function(){
    assert.strictEqual(band.genre, "Punk Rock");
  });
});
