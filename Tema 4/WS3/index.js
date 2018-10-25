/* 1) Diseña una web que hará uso de cookies para guardar el nombre del usuario. 
En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 minutos.
Tras esto saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente.
Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').

Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres (como ñ, espacio en blanco, acentos, etc....)

2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, de párrafo y el tamaño de la letra.

3) ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar el navegador? Compruébalo.

OPCIONAL _________________________________________________

4) Crea 3 funciones genéricas para el manejo de cookies:
    a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un par identificador=valor.
    b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el identificador indicado si existe o null en caso contrario.
    c) BorrarCookie(). */

checkCookies()

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, minutos) {
    var d = new Date();
    d.setTime(d.getTime() + (minutos*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
    checkCookies();
}

function checkCookies(){
    if(getCookie("usuario") != ""){
        if(getCookie("letra") != ""){
            document.body.style.fontSize = getCookie("letra");
        }
        if(getCookie("colorfondo") != ""){
            document.body.style.backgroundColor = getCookie("colorfondo");
        }
        if(getCookie("colorparrafo") != ""){
            document.body.style.color = getCookie("colorparrafo");
        }
        document.getElementById("saludo").innerHTML = "Saludos  "+getCookie("usuario");
    }else{
        var txt;
        var usuario = prompt("Introduce tu nombre de usuario:", "");
        if (usuario == null || usuario == "") {
            alert("Usuario no valido");
        } else {
            setCookie("usuario", usuario, 5);
        }
    }
}

function borrarCookie(){
    document.cookie = "usuario=;expires="+new Date();
    document.cookie = "colorfondo=;expires="+new Date();
    document.cookie = "letra=;expires="+new Date();
    document.cookie = "colorparrafo=;expires="+new Date();
    checkCookies();
}

function aplicarCambios(){
    var colorfondo = document.getElementById("colorfondo").value;
    var letra = document.getElementById("letra").value;
    var colorparrafo = document.getElementById("colorparrafo").value;
    if(colorfondo != ""){
        setCookie("colorfondo",colorfondo,5);
        document.body.style.backgroundColor = colorfondo;
    }
    if(letra != ""){
        setCookie("letra",letra,5);
        document.body.style.fontSize = letra;
    }
    if(colorparrafo != ""){
        setCookie("colorparrafo",colorparrafo,5);
        document.body.style.color = colorparrafo;
    }
}