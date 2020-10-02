var textArea = document.getElementById("textArea");
var addButton = document.getElementById("addButton");
var movieList = document.getElementById("movieList");


function addMovie(){

    var text = textArea.value;
    var li = document.createElement("li");
    
    var deleteButton = document.createElement("p");
    deleteButton.classList.add("deleteButton");
    deleteButton.appendChild(document.createTextNode("X"));
    
    li.appendChild(document.createTextNode(text));
    li.appendChild(deleteButton);
    movieList.appendChild(li);

}

addButton.addEventListener("click",addMovie);

