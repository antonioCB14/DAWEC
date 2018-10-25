/* 5. Usando el objeto Date, sus métodos getHours, getMinutes y GetSeconds y
el método setTimeout() crea un reloj que se actualice cada segundo. */
function inicio(){
    document.close();
    var reloj = setTimeout(inicio2, 1000);
}
function inicio2(){
    var fecha = new Date();
    document.write("Reloj: "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"<br>");
    inicio();
}
inicio();