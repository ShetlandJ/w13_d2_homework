var BandView = function(bands){
  this.render(bands);
}

BandView.prototype = {
  render: function(bands){

    console.log(bands);
    bands.forEach( function(band){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('bands');
      text.innerText = band.name + ": " + '"' + band.genre + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = BandView;
