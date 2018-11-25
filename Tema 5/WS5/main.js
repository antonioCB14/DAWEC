import {Nota} from './nota.js';

var arrayNotas = [];
var panel = document.getElementById("panel");

function todasNotas(notas){
    while (panel.firstChild) {
        panel.removeChild(panel.firstChild);
    }
    for (var i=0;i<notas.length;i++){
        panel.appendChild(vistaNota(notas[i]));
    }
}

function vistaNota(nota){
    var div = document.createElement("DIV");
    div.setAttribute('class',"nota");
    div.innerHTML = "<h2>"+nota.titulo+"</h2>"+
                    "<p>"+nota.texto+"</p>"+
                    "<h6>"+nota.hora+"</h6>";
    return div;
}

document.getElementById("boton").addEventListener("click", crearNota);
function crearNota(){
    var nuevaNota = new Nota(document.getElementById("titulo").value, document.getElementById("texto").value);
    arrayNotas.push(nuevaNota);
    todasNotas(arrayNotas);
}