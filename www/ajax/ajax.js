// In the index.html file there is a button.  When the button is
// clicked kick off an HTTP GET request to the following URL:
//
//   /api/artists
//
// The response text will be a JSON-encoded array of objects.  Inspect
// the response using the browser debugger and then insert the objects
// into the DOM.  Each artist in the response should be used to create
// a new <li> element in the existing <ul> container (the one with the
// ID of "artists").  Display the name of each artist inside the newly
// created <li> elements.
//
// BONUS #1:
//
// Clicking one of the <li> elements should display all information
// about the clicked artist in the <ul> with the ID of "details".
// (Hint: make another HTTP request to /api/artists/N where N is the
// artist ID.)
//
// BONUS #2:
//
// After displaying a list of artist details, also display a list of
// album names.  A list of albums can be fetched using the following
// URL:
//     /api/artists/N/albums
//
(function() {
  var uiElement = document.getElementById("artists");
  var uiDetailsEmement = document.getElementById("details");
  var req = new XMLHttpRequest();
  var buttonNode = document.getElementsByTagName("button")[0]
  buttonNode.addEventListener("click", function function_name(event) {
    req.open("GET", "/api/artists");
    req.send();
    req.addEventListener("load", function(e) {
      var parserdJSON = JSON.parse(req.responseText);
      parserdJSON.forEach(function(artist) {
        var newLiNode = document.createElement("li");
        newLiNode.setAttribute("id", artist.id);
        newLiNode.textContent = artist.name;

        uiElement.appendChild(newLiNode);
      })
    });
  })
  uiElement.addEventListener("click", function function_name(event) {
    var artistId = event.target.getAttribute("id");
    req.open("GET", "/api/artists/"+artistId);
    req.send();
    req.addEventListener("load", function(e) {
      var parserdJSON = JSON.parse(req.responseText);
      var newDivNode = document.createElement("div");
      newDivNode.textContent = JSON.stringify(parserdJSON);
      uiDetailsEmement.appendChild(newDivNode);
    });
  })

})();
