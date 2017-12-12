/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var BandView = __webpack_require__(1);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var BandView = function(bands){
  this.render(bands);
}

BandView.prototype = {
  render: function(bands){

    console.log(bands);
    bands.forEach( function(band){
      var bandName = document.createElement('td');
      bandName.innerText = band.name;
      var genre = document.createElement('td');
      genre.innerText = band.genre;
      var deleteBtn = document.createElement('td');
      var editBtn = document.createElement('td');
      var tableRow = document.createElement('tr');
      var dButton = document.createElement('button');

      dButton.innerText = "❌"

      deleteBtn.appendChild(dButton);

      tableRow.appendChild(bandName);
      tableRow.appendChild(genre);
      tableRow.appendChild(deleteBtn);
      tableRow.appendChild(editBtn);

      // var div = document.getElementById('artist-info');
      var table = document.getElementById('artist-table');
      table.appendChild(tableRow);
      // div.appendChild(li);
    })
  }
}


 module.exports = BandView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map