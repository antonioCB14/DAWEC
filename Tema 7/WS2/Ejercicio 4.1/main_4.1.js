/*P2-4,7 */
/* 4. Vamos a comprobar haciendo uso de AJAX si en un formulario de registro de usuario un
nombre está disponible o no. En Por tanto debes:
◦ Crear una página XHTML de registro de usuario en la que el usuario podrá escribir
el username que desea. Deberá disponer también de un botón “Comprobar
disponibilidad” que debe llamar a una página en PHP en tu servidor., pasándole
como parámetro el nombre escogido.
◦ Crear la página PHP que indica si el nombre está disponible o no. En un caso real esa
página consultaría una Base de Datos para hacer la comprobación. En nuestro caso
por simplicidad, tan sólo generará aleatoriamente una respuesta afirmativa o negativa
a la web cliente (enviada en formato XML).
◦ En el cliente debes mostrar al usuario la disponibilidad o no del nombre. */
var usuario;
var mensaje;
function getUsername() {
    usuario = document.getElementById('username').value;
    mensaje = document.getElementById('disponible');
    loadDoc();
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let variable = JSON.parse(this.responseText);
            if (usuario != '') {
                if(variable.validar == 'Si'){
                    mensaje.innerHTML = 'Nombre de usuario no disponible';
                    mensaje.style.color = 'red';
                } else {
                    mensaje.innerHTML = 'Nombre de usuario disponible';
                    mensaje.style.color = 'green';
                }
            }
        }
    };
    xhttp.open("GET", "usuarios.php?user="+usuario, true);
    xhttp.send();
}