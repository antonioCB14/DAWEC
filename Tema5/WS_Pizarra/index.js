import {tresRaya,tablero} from './puzzleModulo.js';
var nuevoTres = new tresRaya();

//nuevoTres.seleccionarCasilla(0,0);

function seleccionarCasilla(event){
    var X = event.target.id[1];
    var O = event.target.id[3];
    nuevoTres.seleccionarCasilla(X,O);
    //document.getElementById("c"+X+"f"+O).innerHTML = nuevoTres.tablero[X][O];
    if(nuevoTres.tablero[X][O] == 1){
        document.getElementById("c"+X+"f"+O).style.backgroundImage="url(https://image.flaticon.com/icons/svg/25/25298.svg)";
        document.getElementById("c"+X+"f"+O).style.backgroundSize="50px";
    }
    if(nuevoTres.tablero[X][O] == 2){
        document.getElementById("c"+X+"f"+O).style.backgroundImage="url(https://image.flaticon.com/icons/svg/25/25477.svg)";
        document.getElementById("c"+X+"f"+O).style.backgroundSize="50px";
    }
}

for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        document.getElementById("c"+j+"f"+i).onclick = seleccionarCasilla;
    }
}