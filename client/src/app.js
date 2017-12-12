var BandView = require('./views/bandView');

var app = function(){

	var url = "http://localhost:3000/bands";
	makeRequest(url, requestComplete)

	var dButton = document.getElementsByClassName('deleteMe');

	// dButton.forEach(function(button){
		// dButton.setAttribute("onclick","deleteRow(this)");
		// dButton.innerText = "❌"

	// })


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

var deleteRow = function(elem) {
	console.log(elem)
	var table = elem.parentNode.parentNode;
	var rowCount = table.rows.length;

	if(rowCount === 1) {
		alert('Cannot delete the last row');
		return;
	}
	// get the "<tr>" that is the parent of the clicked button
	var row = elem.parentNode.parentNode;
	row.parentNode.removeChild(row); // remove the row
}

window.addEventListener('load', app);
