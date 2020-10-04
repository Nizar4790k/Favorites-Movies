var textArea = document.getElementById("textArea");
var addButton = document.getElementById("addButton");
var movieList = document.getElementById("movieList");


function addMovie(){

    var input = textArea.value;
    var li = document.createElement("li");
    
    var deleteButton = document.createElement("p");
    deleteButton.classList.add("deleteButton");
    deleteButton.appendChild(document.createTextNode("X"));

    deleteButton.addEventListener("click",function(ev){
      var deleteButton=ev.target
      var li = deleteButton.parentElement;
      movieList.removeChild(li);      
    })


    li.appendChild(document.createTextNode(input));
    li.appendChild(deleteButton);
    movieList.appendChild(li);
    textArea.value="";

}


addButton.addEventListener("click",addMovie);

