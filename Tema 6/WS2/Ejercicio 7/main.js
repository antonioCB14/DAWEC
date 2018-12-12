/*7. Mejora el ejercicio anterior para hacer uso ahora de las predicciones meteorológicas que
  ofrece la AEMET. Actualmente se pueden consultar mediante XML las predicciones que;
  genera la Agencia de Meteorología para cada municipio. Por tanto conociendo su código
  postal, podemos consultar los datos para un municipio (para Granada, es por ejemplo,
  http://www.aemet.es/xml/municipios/localidad_18087.xml). Por tanto se pide:
  • Añadir a tu web la posibilidad de consultar el tiempo para el municipio escogido.
  Para ello recuerda que ya disponías del código postal, de modo que ahora desde tu
  PHP deberás consultar la URL correspondiente de la AEMET y enviar los datos al
  cliente (en el formato que tú decidas).
  */
var codigo;
var codigo2;
var variable2;
function loadDoc() {
    var xhttp, xmlDoc, txt, x, i;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            txt = "";
            x = xmlDoc.getElementsByTagName("prediccion");
            for (i = 0; i < x.length; i++) {
                txt = txt + x[i].childNodes[0].nodeValue + "<br>";
            }
            document.getElementById("opciones").innerHTML = txt;
        }
    };
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://www.aemet.es/xml/municipios/localidad_18087.xml", true);
  xhttp.send();
}