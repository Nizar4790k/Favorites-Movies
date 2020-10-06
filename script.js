var textArea = document.getElementById("textArea");
var addButton = document.getElementById("addButton");
var movieList = document.getElementById("movieList");



addButton.addEventListener("click", (ev) => {

  addMovie(textArea.value);

});

document.addEventListener("DOMContentLoaded", function () {

  var size = localStorage.length;

  for (var i = 1; i < size; i++) {

    addMovie(localStorage.getItem("movie" + i));

  }

});



function addMovie(input) {

  var li = document.createElement("li");

  var deleteButton = document.createElement("p");
  deleteButton.classList.add("deleteButton");
  deleteButton.appendChild(document.createTextNode("X"));

  deleteButton.addEventListener("click", deleteMovie);

  li.appendChild(document.createTextNode(input));
  li.appendChild(deleteButton);
  movieList.appendChild(li);
  textArea.value = "";


  saveToLocalStorage();

}

function saveToLocalStorage() {

  localStorage.clear();
  var moviesLength = movieList.childNodes.length;

  for (var i = 0; i < moviesLength; i++) {

    var movie = movieList.childNodes[i].childNodes[0];

    var key = "movie" + i;

    localStorage.setItem(key, movie);



  }

  console.log(localStorage);




}


function deleteMovie(ev) {
  var deleteButton = ev.target
  var li = deleteButton.parentElement;
  movieList.removeChild(li);

  saveToLocalStorage();
}




