/* 3. Utilizando setTimeout() creo un contador hacía atrás de 60 segundos. */
var tiempo = 60*1000;
function timeout(){
    document.close();
    var hola = setTimeout(cuentaAtras, 1000);
}
function cuentaAtras(){
    if (tiempo > 0){
        tiempo -= 1000;
        document.write("Tiempo: "+tiempo/1000+"<br>");
        timeout();
    }
}
timeout();