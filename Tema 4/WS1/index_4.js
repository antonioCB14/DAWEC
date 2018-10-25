/* 4. Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.*/

var tabla = "<table cellspacing=0 width=1000 heigth=1000>";
for (var i = 0; i < 400; i++) {
    tabla += "<tr>";
    for (var j = 0; j < 300; j++)
        tabla += "<td onmousemove='colorear(event)' touchstart='colorear(event)' onmousedown='borrarRow(event)'></td>";
    tabla += "</tr>";
}
tabla += "</table>";
document.getElementById("tabla").innerHTML = tabla;

function colorear(event) {
    if (event.ctrlKey) {
        var x = event.target;
        x.style.backgroundColor = "#42b3f4";
    }
    if (event.shiftKey) {
        var y = event.target;
        y.style.backgroundColor = "#f46542";
    }
    if (event.touchstart){
        x.style.backgroundColor = "#42b3f4";
    }
}
/* 5. Añade las siguientes funcionalidades al ejercicio anterior:
◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
◦ Borrar por completo el canvas (con un botón). */
function borrarRow(event) {
    var z = event.target;
    z.style.backgroundColor = "#ffffff";
}