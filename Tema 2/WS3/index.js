//Ws3 1,2,7,9

/* 1. Crea las siguientes funciones y llamalas desde una página XHTML para mostrar
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra más larga en ella contenida
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que sólo aparece en mayúscula la primera letra y el resto en
minúscula. */

var cadena = prompt("Introduce una cadena de caracteres:");
invierteCadena(cadena);
function invierteCadena(cadena){
    var separar = cadena.split(' ');
    for(var i=separar.length;i>=0;i--){
        document.write(separar[i]+" ");
    }
}

inviertePalabras(cadena);
function inviertePalabras(cadena){
    var x = cadena.length;
    document.write("<br>");
    for(var i = cadena.length;i>=0;i--){
        document.write(cadena.charAt(i));
    }
}

encuentraPalabraMasLarga(cadena);
function encuentraPalabraMasLarga(cadena){
    var separar = cadena.split(' ');
    var longitud = 0;
    for (var i=0;i<separar.length;i++){
        if (separar.length > longitud){
            longitud = separar[i].length;
            document.write("<br>"+longitud);
        }
    }
}

var c = prompt("Longitud de palabra: ");
fltraPalabrasMasLargas(cadena, c);
function fltraPalabrasMasLargas(cadena ,c){
    var separar = cadena.split(' ');
    var cuantas = 0;
    for (var i=0;i<separar.length;i++){
        if (separar[i].length>c){
            cuantas++;
        }
    }
    document.write("<br>Palabras mas largas: "+cuantas)
}

cadenaBienFormada(cadena);
function cadenaBienFormada(cadena){
    document.write("<br>"+cadena.charAt(0).toUpperCase() + cadena.substr(1));
}

/* 2. Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas. */
informacion(cadena);
function informacion(cadena){
    document.write("<br>");
    if (cadena === cadena.toUpperCase()){
        document.write("Todo mayúsculas.");
    }
    else if(cadena === cadena.toLowerCase()){
        document.write("Todo minúsculas.")
    }
    else{
        document.write("Mezcla mayúsculas y minúsculas.")
    }
    document.write("<br>");
}

/* 7. Desarrolla una función que tomando como entrada una cadena de texto nos
devuelva si es o no un palíndromo. */
palindromo(cadena);
function palindromo(cadena){
    if (cadena.split("").reverse().join("") === cadena){
        document.write("Es un palíndromo");
    }else{
        document.write("No es un palíndromo");
    }
}
/* 9. Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de
una tabla) como se ve en la figura:
Entrada: HOLA
Salida:
H O L A
O     L
L     O
A L O H */
var palabra =prompt("Escribe una palabra: ");
var palabrainv = palabra.split("").reverse().join("");
tablaPalabra(palabra);
function tablaPalabra(palabra){
    document.write("<br><table border='1' cellspacing='2'>");
    document.write("<tr>");
    for (var i=0;i<palabra.length;i++){
        document.write("<td>"+palabra[i]+"</td>");
    }
    document.write("</tr>");
    for (var p=0;p<palabra.length-1;p++){
        document.write("<tr>");
        document.write("<td>"+palabra[p]+"</td>");

        for (var l=0;l<palabra.length-2;l++){
            document.write("<td></td>")
        }
        document.write("<td>"+palabra[p]+"</td>");
        document.write("</tr>");
    }
    for (var i=0;i<palabra.length;i++){
        document.write("<td>"+palabra[i]+"</td>");
    }
    document.write("</tr>");
    document.write("</table>");
}