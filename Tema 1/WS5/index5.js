var columnas = prompt("Numero de columnas: ");
var filas = prompt("Numero de filas: ");
var alto = prompt("Alto (En pixels): ");
var ancho = prompt("Ancho (En pixels): ");

//Ejercicio 4.18
document.write("<table border='0' cellspacing='2' bgcolor='black' witdth='"+columnas*ancho+"'>");
for (var i=0;i<filas;i++){
    document.write("<tr bgcolor = 'white' height='"+alto+"'>");
    for(var p=0;p<columnas;p++){
        document.write("<td width = '"+ancho+"'> &nbsp;</td>")
    }
    document.write("</tr>")
}
document.write("</table>")