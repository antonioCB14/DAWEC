var columnas = prompt("Nº de columnas");
var alto = prompt("Alto");
var ancho = prompt("Ancho");
document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = "+columnas*ancho+">");
document.write("<tr height = "+alto+">");
//Ejercicios 4.11 y 4.12
/*for (var i=0;i<columnas;i++){
    if(i%2==1){
        document.write("<td bgcolor = 'white' width = "+ancho+"> &nbsp;</td>")
    }else{
        document.write("<td bgcolor = 'black' width = "+ancho+"> &nbsp;</td>")
    }
}*/

//Ejercicio 4.13 y 4.14
var i = 0
while (i < columnas){
    if(i%2==1){
        document.write("<td bgcolor = 'white' width = "+ancho+"> &nbsp;</td>");
        i++;
    }else{
        document.write("<td bgcolor = 'black' width = "+ancho+"> &nbsp;</td>");
        i++;
    }
}
document.write("</tr><table>");