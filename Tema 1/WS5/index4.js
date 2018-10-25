/*Hacer un programa en JavaScript que usando
dos bucles anidados for imprima por pantalla
todas las tablas de multiplicar.*/

for (var i=1;i<=10;i++){
    document.write("<h2>Tabla del "+i+"</h2>");
    for(var p=1;p<=10;p++){
        document.write(i+"x"+p+" = "+i*p+"<br>");
    }
}