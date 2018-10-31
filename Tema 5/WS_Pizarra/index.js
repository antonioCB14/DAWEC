import {tresRaya,tablero} from './tresRayaModulo.js';
var nuevoTres = new tresRaya();

//nuevoTres.seleccionarCasilla(0,0);

function seleccionarCasilla(event){
    var X = event.target.id[1];
    var O = event.target.id[3];
    nuevoTres.seleccionarCasilla(X,O);    
    
    if(nuevoTres.tablero[X][O] == 1){
        document.getElementById("c"+X+"f"+O).style.backgroundImage="url(https://image.flaticon.com/icons/svg/25/25298.svg)";
        document.getElementById("c"+X+"f"+O).style.backgroundSize="contain, cover";
        document.getElementById("c"+X+"f"+O).style.backgroundRepeat= "no-repeat";
        document.getElementById("c"+X+"f"+O).style.backgroundPosition= "center";
    }
    if(nuevoTres.tablero[X][O] == 2){
        document.getElementById("c"+X+"f"+O).style.backgroundImage="url(https://image.flaticon.com/icons/svg/25/25477.svg)";
        document.getElementById("c"+X+"f"+O).style.backgroundSize="contain, cover";
        document.getElementById("c"+X+"f"+O).style.backgroundRepeat= "no-repeat";
        document.getElementById("c"+X+"f"+O).style.backgroundPosition= "center";
    }
    if(nuevoTres.gana1 == true){
        alert("Ganan los atravesados");
    }
    if(nuevoTres.gana2 == true){
        alert("Ganan los rebolondos");
    }
    if(nuevoTres.finalizado == true){
        alert("Hemos terminado ;(");
    }
    if(nuevoTres.nosepuede == true){
        alert("No puedes mover ficha aquí");
    }
}

for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        document.getElementById("c"+j+"f"+i).onclick = seleccionarCasilla;
    }
}