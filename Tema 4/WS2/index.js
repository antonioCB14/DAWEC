/* Crea un formulario típico de registro para tu web. Debe contener al menos campos para introducir nombre, apellidos, DNI, Teléfono, email y nombre de usuario.
Todos los campos son obligatorios, y debes validar el mayor número posible de ellos haciendo uso de expresiones regulares. 
El nombre de usuario debe estar formado por al menos 8 caracteres, entre los cuales debe aparecer obligatoriamente algún número y algún signo de puntuación.
Conforme sale el foco de cada input, deberás validar el contenido de éste y mostrar información al usuario que le indique si está correcto o no. */
var nombreok = false;
var apellidosok = false;
var dniok = false;
var telefonook = false;
var emailok = false;
var usuariook= false;

function validarNombre(){
    var nombre = document.getElementsByName("nombre").value;
    var nombreregex = /^[a-zA-Z ]{0,30}$/;
    if (nombreregex.test(nombre)) {
       nombreok = true;
    }else{
        nombreok = false;
    }
}
function validarApellidos(){
    var apellidosregex = /^[a-zA-Z ]{0,50}$/;
    var apellidos = document.getElementsByName("apellidos").value;
    if (apellidosregex.test(apellidos)) {
        apellidosok = true;
    }else{
        apellidosok = false;
    }
}
function validarDNI(){
    var dniregex = /^\d{8}[a-zA-Z]$/;
    var dni = document.getElementsByName("dni").value;
    if (dniregex.test(dni)) {
        dniok = true;
    }else{
        dniok = false;
    }
}
function validarTelefono(){
    var telefonoregex = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;
    var telefono = document.getElementsByName("telefono").value;
    if (telefonoregex.test(telefono)) {
        telefonook = true;
    }else{
        telefonook = false;
    }
}
function validarEmail(){
    var email = document.getElementsByName("email").value;
    console.log(email);
}
function validarUsuario(){
    var usuarioRegex = /^[a-zA-Z0-9]+$/;
    var usuario = document.getElementsByName("usuario").value;
    if (usuarioRegex.test(usuario)) {
        usuariook = true;
    }else{
        usuariook = false;
    }
}
function validarTodo(){
    console.log("Usuario: "+usuariook)
}