/*4. En las aplicaciones reales, cuando un nombre de usuario no está disponible, se ofrecen al
ciente varias opciones alternativas. Mejora tu ejercicio anterior para que en caso de
considerarse ya ocupado el nombre, se generen varias alternativas que deben enviarse al
cliente. La web debe pues mostrar éstas al usuario de modo que pueda escoger una de ellas.*/
var usuario;
var mensaje;
function getUsername() {
    opciones = document.getElementById('opciones');
    usuario = document.getElementById('username').value;
    mensaje = document.getElementById('disponible');
    loadDoc();
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            
            var myObj = JSON.parse(this.responseText);
            if (usuario != '') {
                if(myObj.validar == 'Si'){
                    mensaje.innerHTML = 'Nombre de usuario no disponible';
                    opciones.innerHTML = 'Otras opciones: '+ myObj['nombre'][0] +', '+ myObj['nombre'][1] +', '+ myObj['nombre'][2];
                    mensaje.style.color = 'red';
                } else {
                    mensaje.innerHTML = 'Nombre de usuario disponible';
                    opciones.style.display = 'none';
                    mensaje.style.color = 'green';
                }
            }
        }
    };
    xhttp.open("GET", "usuarios.php?user="+usuario, true);
    xhttp.send();
}