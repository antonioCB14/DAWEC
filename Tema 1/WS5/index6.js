var altoyancho = prompt("Alto y ancho (En pixels): ");

//Ejercicio 4.18
document.write("<table border='0' cellspacing='2' bgcolor='black' witdth='"+altoyancho*8+"'>");
for (var i=0;i<8;i++){
    document.write("<tr height='"+altoyancho+"'>");
    for(var p=0;p<8;p++){
        if(i%2 == 0){
            if (p%2 == 0){
                document.write("<td bgcolor = 'black' width = '"+altoyancho+"'> &nbsp;</td>")
            }else{
                document.write("<td bgcolor = 'white' width = '"+altoyancho+"'> &nbsp;</td>")
            }
        }else if(i%2 == 1){
            if (p%2 == 0){
                document.write("<td bgcolor = 'white' width = '"+altoyancho+"'> &nbsp;</td>")
            }else{
                document.write("<td bgcolor = 'black' width = '"+altoyancho+"'> &nbsp;</td>")
            }
        }
    }
    document.write("</tr>")
}
document.write("</table>")