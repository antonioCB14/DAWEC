// WS1 1,2,4,5,9,10
// 1. Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.
function hacerClick() {
    alert("CLICK!!!!!")
}

/* 2. Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentra en cada momento. */
function movimiento(event){
    document.getElementById("coordenadas").innerHTML = "X: "+event.clientX+"    Y: "+event.clientY;
}

/* 9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón). */
/* 10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.*/
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}