var APIKEY = "b4a327275bc141d98e06234f5f24b50e";

function loadJSON(){
    var xhttp, xmlDoc;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            xmlDoc = JSON.parse(this.responseText);
            for (var i=0;i< xmlDoc.recipes.length;i++){
                document.getElementById("recipes").innerHTML = xmlDoc.publisher[i];
            }
            
        }
    };
    xhttp.open("GET", "https://www.food2fork.com/api/search?key="+APIKEY+"&q=chicken%20breast&page=2", true);
    xhttp.send();
}