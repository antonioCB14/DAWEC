/* 2) Tres en Raya. El juego del tres en raya consiste en un tablero de 3x3, en el que
sucesivamente dos jugadores van marcando casillas hasta conseguir tener sus tres
marcas en línea, pudiendo ser ésta horizontal, vertical o en diagonal. Se pide por tanto
la implementación de éste juego teniendo en cuenta:
1. El juego es pensado para ser usado por dos usuarios.
2. El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigue
antes las tres en línea. */
var tablero;
var finalizado;
var inicio;
var fila;
var columna;

class tresRaya{
	constructor(){
		this.tablero = [];
		this.finalizado = false;
		this.inicio = true;
		this.fila;
		this.columna;
		this.crearTablero();
		this.rellenarTablero();
		this.imprimeTablero();
		
	}

    // Creamos el array bidimensional con 3 filas y 3 columnas.
	crearTablero(){ 
		this.finalizado = false;
		this.inicio = true;
		for (var i = 0; i < 3; i++) {
			this.tablero[i]= [];
			for (var j = 0; j < 3; j++) {
				this.tablero[i][j] = [];
			}
		}
    }

    // Introducimos el valor 0 en todos los campos, representarán un espacio en blanco.
	rellenarTablero(){
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				this.tablero[i][j] = 0;
			}
		}
    }
    
    // Imprimimos el array bidimensional por pantalla dentro de una tabla.
	imprimeTablero(){
		document.write('<table width="100" height="100" border="1"');
		for(var i=0;i<3;i++){
			document.write('<tr>');
			for(var j=0;j<3;j++){
				document.write('<td>'+ this.tablero[i][j] +'</td>'); 
			}
			document.write('</tr>');
		}
		document.write('</table>');
    }
    
    // Función para seleccionar la casilla a marcar, se deben especificar la fila y la columna.
	seleccionarCasilla(fila,columna){
		if(this.finalizado == false){
			if(this.tablero[fila][columna] == 0){
				if(this.inicio == true){
					this.tablero[fila][columna] = "1";
					this.imprimeTablero();
					this.inicio = false;
				}else{
					this.tablero[fila][columna] = "2";
					this.imprimeTablero();
					this.inicio = true;
				}
				
			}else{
				alert("Ya hay una ficha aquí.");
			}
			this.comprobarSolucion();
		}else{
			alert("La partida ha terminado.");
		}
    }
    
    // Comprobamos todas las posibles soluciones
	comprobarSolucion(){
        //Comprobaciones horizontales
		if(	this.tablero[0][0] == this.tablero[0][1] && 
			this.tablero[0][0] == this.tablero[0][2] &&
			this.tablero[0][0] == 1 || this.tablero[0][0] == 2){
            	alert("Ha ganado el jugador "+ this.tablero[0][0]);
            	this.finalizado = true;
        }
		if(	this.tablero[1][0] == this.tablero[1][1] &&
			this.tablero[1][0] == this.tablero[1][2] && 
			this.tablero[1][0] == 1 || this.tablero[1][0] == 2){
            	alert("Ha ganado el jugador "+ this.tablero[1][0]);
            	this.finalizado = true;
        }
		if(	this.tablero[2][0] == this.tablero[2][1] && 
			this.tablero[2][0] == this.tablero[2][2] && 
			this.tablero[2][0] == 1 || this.tablero[2][0] == 2){
            	alert("Ha ganado el jugador "+ this.tablero[2][0]);
            	this.finalizado = true;
        }

        //Comprobaciones verticales
		if(	this.tablero[0][0] == this.tablero[1][0] && 
			this.tablero[0][0] == this.tablero[2][0] && 
			this.tablero[0][0] == 1 || this.tablero[0][0] == 2){
            	alert("Ha ganado el jugador "+ this.tablero[0][0]);
            	this.finalizado = true;
        }
		if(	this.tablero[0][1] == this.tablero[1][1] && 
			this.tablero[0][1] == this.tablero[2][1] && 
			this.tablero[0][1] == 1 || this.tablero[0][1] == 2){
            	alert("Ha ganado el jugador "+this.tablero[0][1]);
            	this.finalizado = true;
        }
		if(	this.tablero[0][2] == this.tablero[1][2] && 
			this.tablero[0][2] == this.tablero[2][2] && 
			this.tablero[0][2] == 1 || this.tablero[2][0] == 2){
            	alert("Ha ganado el jugador "+this.tablero[0][2]);
            	this.finalizado = true;
        }

        //Comprobaciones diagonales
		if(	this.tablero[0][0] == this.tablero[1][1] && 
			this.tablero[0][0] == this.tablero[2][2] && 
			this.tablero[0][0] == 1 || this.tablero[0][0] == 2){
            	alert("Ha ganado el jugador "+ this.tablero[0][0]);
            	this.finalizado = true;
        }
		if(	this.tablero[0][2] == this.tablero[1][1] && 
			this.tablero[0][2] == this.tablero[2][0] && 
			this.tablero[0][2] == 1 || this.tablero[0][2] == 2){
            	alert("Ha ganado el jugador "+ this.tablero[0][2]);
            	this.finalizado = true;
        }
	}
}

var traya = new tresRaya();
