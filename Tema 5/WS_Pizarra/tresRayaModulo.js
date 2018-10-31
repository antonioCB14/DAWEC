/*  Haciendo uso de tu modulo, crea un juego(interfaz) debe permitir jugar(evento) !!!!!!!		*/

/*  1º 	Para empezar, debes realizar un:
			import {tresRaya,tablero} from './puzzleModulo.js';
	
	2º	Una vez importado el modulo, tienes que llamar a:
			var nuevoTres = new tresRaya();
		Esto creara un tablero en forma de array bidimensional, donde el 0 se toma como un hueco en blanco.
	
	3º	Para colocar una ficha se debe especificar de la siguiente manera:
			nuevoTres.seleccionarCasilla(fila,columna);
	
			
*/
export var tablero = [];

export class tresRaya{
	constructor(){
		this.tablero = tablero;
		this.finalizado = false;
		this.inicio = true;
		this.gana1 = false;
		this.gana2 = false;
		this.nosepuede = false;
		this.fila;
		this.columna;
		this.crearTablero();
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
		this.rellenarTablero();
    }

    // Introducimos el valor 0 en todos los campos, representarán un espacio en blanco.
	rellenarTablero(){
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				this.tablero[i][j] = 0;
			}
		}
    }
    
    // Función para seleccionar la casilla a marcar, se deben especificar la fila y la columna.
	seleccionarCasilla(fila,columna){
		if(this.finalizado == false){
			if(this.tablero[fila][columna] == 0){
				this.nosepuede = false;
				if(this.inicio == true){
					this.tablero[fila][columna] = "1";
					this.inicio = false;
				}else{
					this.tablero[fila][columna] = "2";
					this.inicio = true;
				}
			}else{
				this.nosepuede = true;
			}
			this.comprobarSolucion();
		}
    }
    
    // Comprobamos todas las posibles soluciones
	comprobarSolucion(){
        //Comprobaciones horizontales
		if(	this.tablero[0][0] == this.tablero[0][1] && 
			this.tablero[0][0] == this.tablero[0][2] &&
			(this.tablero[0][0] == 1 || this.tablero[0][0] == 2)){
            	if(this.tablero[0][0] == 1){
					this.gana1 = true;
				}else{
					this.gana2 = true;
				}
            	this.finalizado = true;
        }
		if(	this.tablero[1][0] == this.tablero[1][1] &&
			this.tablero[1][0] == this.tablero[1][2] && 
			(this.tablero[1][0] == 1 || this.tablero[1][0] == 2)){
            	if(this.tablero[1][0] == 1){
					this.gana1 = true;
				}else{
					this.gana2 = true;
				}
            	this.finalizado = true;
        }
		if(	this.tablero[2][0] == this.tablero[2][1] && 
			this.tablero[2][0] == this.tablero[2][2] && 
			(this.tablero[2][0] == 1 || this.tablero[2][0] == 2)){
            	if(this.tablero[2][0] == 1){
					this.gana1 = true;
				}else{
					this.gana2 = true;
				}
            	this.finalizado = true;
        }

        //Comprobaciones verticales
		if(	this.tablero[0][0] == this.tablero[1][0] && 
			this.tablero[0][0] == this.tablero[2][0] && 
			(this.tablero[0][0] == 1 || this.tablero[0][0] == 2)){
            	if(this.tablero[0][0] == 1){
					this.gana1 = true;
				}else{
					this.gana2 = true;
				}
            	this.finalizado = true;
        }
		if(	this.tablero[0][1] == this.tablero[1][1] && 
			this.tablero[0][1] == this.tablero[2][1] && 
			(this.tablero[0][1] == 1 || this.tablero[0][1] == 2)){
            	if(this.tablero[0][1] == 1){
					this.gana1 = true;
				}else{
					this.gana2 = true;
				}
            	this.finalizado = true;
        }
		if(	this.tablero[0][2] == this.tablero[1][2] && 
			this.tablero[0][2] == this.tablero[2][2] && 
			(this.tablero[0][2] == 1 || this.tablero[2][0] == 2)){
            	if(this.tablero[0][2] == 1){
					this.gana1 = true;
				}else{
					this.gana2 = true;
				}
            	this.finalizado = true;
        }

        //Comprobaciones diagonales
		if(	this.tablero[0][0] == this.tablero[1][1] && 
			this.tablero[0][0] == this.tablero[2][2] && 
			(this.tablero[0][0] == 1 || this.tablero[0][0] == 2)){
            	if(this.tablero[0][0] == 1){
					this.gana1 = true;
				}else{
					this.gana2 = true;
				}
            	this.finalizado = true;
        }
		if(	this.tablero[0][2] == this.tablero[1][1] && 
			this.tablero[0][2] == this.tablero[2][0] && 
			(this.tablero[0][2] == 1 || this.tablero[0][2] == 2)){
            	if(this.tablero[0][2] == 1){
					this.gana1 = true;
				}else{
					this.gana2 = true;
				}
            	this.finalizado = true;
        }
	}
}