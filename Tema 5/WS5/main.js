class Nota{
    constructor(titulo, texto){
        this.titulo = titulo;
        this.texto = texto;
        this.hora = new Date().getHours() +":"+new Date().getMinutes(); 
        this.timestamp = new Date().getTime()
    }
}

var arrayNotas = [];
var panel = document.getElementById("panel");
if (localStorage.getItem("array") != null){
    arrayNotas = JSON.parse(localStorage.getItem("array"));
    todasNotas(arrayNotas);
}


function todasNotas(notas){
    localStorage.setItem("array", JSON.stringify(arrayNotas));
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
                    "<h6>"+nota.hora+"</h6>"+
                    "<input type='button' id='eliminar' value='Eliminar' onclick='borrarNota("+nota.timestamp+")'>"+
                    "<input type='button' id='editar' value='Editar' onclick='editarNota("+nota.timestamp+")'>";
    return div;
}

function crearNota(){
    var nuevaNota = new Nota(document.getElementById("titulo").value, document.getElementById("texto").value);
    arrayNotas.push(nuevaNota);
    localStorage.setItem("array", JSON.stringify(arrayNotas));
    panel.appendChild(vistaNota(arrayNotas[arrayNotas.length-1]));
}

function borrarNota(date){
    for(var i=0;i<arrayNotas.length;i++){
        if(arrayNotas[i].timestamp == date){
            arrayNotas.splice(i,1);
            break;
        }
    }
    todasNotas(arrayNotas);
}

function editarNota(date){
    for(var i=0;i<arrayNotas.length;i++){
        if(arrayNotas[i].timestamp == date){
            var tituloEdit = prompt("Introduce el nuevo titulo");
            var textoEdit = prompt("Introduce el nuevo texto");
            arrayNotas[i] = new Nota(tituloEdit,textoEdit);
            break;
        }
    }
    todasNotas(arrayNotas);
}