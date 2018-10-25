//Ws1 1,2,3,5

/* 1. Realiza una pagina que cree un objeto de tipo Date y muestre en la
página la siguiente información (cada una en una línea):
• El año actual
• El mes actual
• El día actual
• La hora actual
• Los minutos actuales
• Los segundos actuales */

var fecha = new Object();
fecha.anno = new Date().getFullYear();
fecha.mes = new Date().getMonth();
fecha.dia = new Date().getDate();
fecha.hora = new Date().getHours();
fecha.minutos = new Date().getMinutes();
fecha.segundos = new Date().getSeconds();
document.write("Año "+fecha.anno+"<br>");
document.write("Mes "+(fecha.mes+1)+"<br>");
document.write("Dia "+fecha.dia+"<br>");
document.write("Hora "+fecha.hora+"<br>");
document.write("Minutos "+fecha.minutos+"<br>");
document.write("Segundos "+fecha.segundos+"<br>");

/* 2. Crea una página web en la que se muestre el resultado de cada uno de
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 días a la variable "fechaHoy"
c. Crear variable "fecha187" que reste 187 días variable "fechaHoy"
d. Sumar 2 años a la variable "fecha85"
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
observa lo que obtienes */
var fechaHoy = new Date();
document.write("Fecha: "+fechaHoy+"<br>");
var fecha85 = new Date(fechaHoy.setDate(fechaHoy.getDate()+85));
document.write("Fecha + 85: "+fecha85+"<br>");
var fecha187 = new Date(fechaHoy.setDate(fechaHoy.getDate()-187));
document.write("Fecha - 187: "+fecha187+"<br>");
document.write("Fecha 85 + 2 años: "+new Date(fecha85.setFullYear(fecha85.getFullYear()+2))+"<br>");
document.write("Fecha 187 - 24 horas: "+new Date(fecha187.setHours(fecha187.getHours()-24))+"<br>");
var fechaResto = new Date(fecha85-fecha187);
document.write("Fecha Resto: "+fechaResto+"<br>");