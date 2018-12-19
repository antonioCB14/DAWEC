/*5. Crea una web que funcione como un cliente de correo electrónico. Para ello
supongamos que en tu servidor dispones de un script que conforme se recibe un
correo, éste se escribe en un fichero XML. Por tanto:
• Define el formato de fichero XML que te permita simular esta situación (correos
electrónicos).
• Crea la web con la interfaz necesaria para que periodicamente actualice la lista de
correos.*/
var correos = ""
function cargaPeriodica(){
    loadXML();
    var intervalo = setInterval("loadXML()", 5000);
}

function loadXML(){
    var xhttp, xmlDoc, txt, x, i;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            xmlDoc = JSON.parse(this.responseText);
            for (var i=0;i< xmlDoc.correo.length;i++){ 
                correos = correos +"<b>"+ xmlDoc.correo[i].direccion +"</b><br>"+ xmlDoc.correo[i].asunto+"<br><br>";
            }
            document.getElementById("contenido").innerHTML = correos;
            correos = "";
        }
    };
    xhttp.open("GET", "correos1.json", true);
    xhttp.send();
}