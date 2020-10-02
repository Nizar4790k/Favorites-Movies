var textArea = document.getElementById("textArea");
var addButton = document.getElementById("addButton");
var movieList = document.getElementById("movieList");


function addMovie(){

    var text = textArea.value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    movieList.appendChild(li);

}

addButton.addEventListener("click",addMovie);

