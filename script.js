var textArea = document.getElementById("textArea");
var addButton = document.getElementById("addButton");
var movieList = document.getElementById("movieList");



function Movie(id,name){
  this.name=name;
  this.id=id;
}




addButton.addEventListener("click", (ev) => {

  var movie = new Movie(createUUID(),textArea.value);
  

  localStorage.setItem(movie.id,movie.name);
  
  addMovie(movie);

  
  

});


document.addEventListener("DOMContentLoaded", function () {

  reloadMovies();


});







function addMovie(movie) {



  const li = document.createElement("li");
  const deleteButton = document.createElement("a");
  deleteButton.classList.add("deleteButton");
  deleteButton.appendChild(document.createTextNode("X"));

 

  deleteButton.addEventListener("click",function (ev){
    

    var deleteButton = ev.target
    var li = deleteButton.parentElement;
    
    movieList.removeChild(li);
    localStorage.removeItem(movie.id);
  
  });


  





  li.appendChild(document.createTextNode(movie.name));
  li.appendChild(deleteButton);
  movieList.appendChild(li);
  

  
 
  textArea.value="";


}



function reloadMovies(){
  
  movieList.innerHTML="";

  var size = localStorage.length;

  for (var i = 0; i < size; i++) {



    var key = localStorage.key(i);

    var movie = new Movie(key,localStorage.getItem(key));
 
    addMovie(movie);

  }
}



function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
     return v.toString(16);
  });
}




