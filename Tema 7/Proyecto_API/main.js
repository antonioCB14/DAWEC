//var APIKEY = "b4a327275bc141d98e06234f5f24b50e";
var APIKEY = "adb23d5321c659bcfa65b9ad799bb755";
function loadJSON(){
    var xhttp, xmlDoc;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            xmlDoc = JSON.parse(this.responseText);
            for (var i=0;i< xmlDoc.recipes.length;i++){
                crearReceta(xmlDoc.recipes[i]);
            }
        }
    };
    xhttp.open("GET", "https://www.food2fork.com/api/search?key="+APIKEY+"&q=chicken%20breast&page=2", true);
    xhttp.send();
}

function crearReceta(receta){
    var divrecipes = document.getElementById("recipes");
    var div = document.createElement("DIV");
    div.setAttribute('class',"receta");
    div.innerHTML = "<img src="+receta.image_url+">"+
                    "<h2>"+receta.title+"</h2>";
    divrecipes.appendChild(div);
    return div;
}

function buscarReceta(){
    bReceta = document.getElementById("titulo").value;
    var xhttp, xmlDoc;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            xmlDoc = JSON.parse(this.responseText);
            for (var i=0;i< xmlDoc.recipes.length;i++){
                crearReceta(xmlDoc.recipes[i]);
            }
        }
    };
    var url = "https://www.food2fork.com/api/search?key="+APIKEY+"&q="+bReceta;
    console.log(url);
    
    xhttp.open("GET", url, true);
    xhttp.send();
}
