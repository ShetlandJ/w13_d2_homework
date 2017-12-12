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
