var BandView = require('./views/bandView');

var app = function(){

  var url = "http://localhost:3000/bands";
  makeRequest(url, requestComplete)
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var requestComplete = function(){
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var bands = JSON.parse(jsonString);
  showContent(bands);
}

var showContent = function(bands){
  var quoteView = new BandView(bands)
}


window.addEventListener('load', app);


window.addEventListener("load", function(){
	console.log("Loaded!");
});
