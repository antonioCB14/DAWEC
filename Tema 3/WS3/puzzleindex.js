/*1) Puzzle. Se desea implementar una web para la realización de puzzles. Un puzzle no es
más que un tablero cuadrado con un hueco que podemos mover y que permite
reordenar las piezas. Se pide por tanto la implementación de una clase que represente
este juego teniendo en cuenta:
1. La dimensión puede variar, se escogerá en la creación.
2. El espacio en blanco sólo se mueve arriba, abajo, izquierda, derecha, controlando
por supuesto que sea un movimiento válido.
3. Debe llevarse un control del tiempo mínimo para resolverlo, así como el número de
movimientos realizados.
4. Los tableros se generarán aleatoriamente.
5. Implementarás un método dibujar() que imprimirá en pantalla el tablero para poder
ser probado. */

var nfilas = prompt("Introduce el numero de filas:");
var ncolumnas = prompt("Introduce el numero de columnas:");
var tablero = [];
var blanco = [];
var rellena=0;

class puzzle{
	constructor(filas,columnas){
		this.filas = filas;
		this.columnas = columnas;
		this.tablero = [];
		this.blanco = [];
		this.crearTablero();
		this.rellenarTablero();
		this.imprimeTablero();
		this.mezcla();
	}

	crearTablero(){
		for(var i=0; i<this.filas;i++){
			this.tablero[i]= [];
			for (var j = 0; j < this.columnas; j++) {
				this.tablero[i][j] = [];
			}
		}
	}

	rellenarTablero(){
		for(var i=0; i<this.filas;i++){
			for(var j=0; j<this.columnas;j++){
				this.tablero[i][j] = rellena;
				if(rellena == 0){
					this.blanco[0]=i;
					this.blanco[1]=j;
			    }
			rellena++;
			}
		}
	}

	imprimeTablero(){
		document.write('<table width="100" height="100" border="1"');
		for(var i=0;i<this.filas;i++){
			document.write('<tr>');
			for(var j=0;j<this.columnas;j++){
				if(this.tablero[i][j] == 0){
					document.write('<td></td>'); 
				}else{
					document.write('<td>'+ this.tablero[i][j] +'</td>'); 
				}
			}
			document.write('</tr>');
		}
		document.write('</table>');
	}

	mover(direccion){
		var aux = this.tablero[this.blanco[0]][this.blanco[1]];
		switch(direccion){
			case "izquierda":
				if(this.blanco[1] <= 0){
				}else{
					this.tablero[this.blanco[0]][this.blanco[1]] = this.tablero[this.blanco[0]][this.blanco[1]-1];
					this.tablero[this.blanco[0]][this.blanco[1]-1] = aux;
					this.blanco[1]=this.blanco[1]-1;
					this.imprimeTablero();	
				}
			break;

			case "derecha":
				if(this.blanco[1] >= (this.columnas)-1){	
				}else{
					this.tablero[this.blanco[0]][this.blanco[1]] = this.tablero[this.blanco[0]][this.blanco[1]+1];
					this.tablero[this.blanco[0]][this.blanco[1]+1] = aux;
					this.blanco[1]=this.blanco[1]+1;
					this.imprimeTablero();	
				}
			break;

			case "arriba":
				var aux = this.tablero[this.blanco[0]][this.blanco[1]];
					if(this.blanco[0]<=0){	
					}else{
						this.tablero[this.blanco[0]][this.blanco[1]] = this.tablero[this.blanco[0]-1][this.blanco[1]];
						this.tablero[this.blanco[0]-1][this.blanco[1]] = aux;
						this.blanco[0]=this.blanco[0]-1;
						this.imprimeTablero();	
					}
			break;

			case "abajo":
				var aux = this.tablero[this.blanco[0]][this.blanco[1]];
				if(this.blanco[0] >= (this.alto)-1){
				}else{
					this.tablero[this.blanco[0]][this.blanco[1]] =this.tablero[this.blanco[0]+1][this.blanco[1]];
                    this.tablero[this.blanco[0]+1][this.blanco[1]] = aux;
					this.blanco[0]=this.blanco[0]+1;
                }
            break;
		}
	}

	mezcla(){
        for(var i=0;i<1000;i++){
            var aleatorio = Math.floor(Math.random()*4);
            
            if(aleatorio==0){
                this.mover("izquierda");
            }
            if(aleatorio==1){
                this.mover("derecha");
            }
            if(aleatorio==2){
                this.mover("arriba");
            }
            if(aleatorio==3){
                this.mover("abajo");
            }
        }
    }
}

var puzzlen = new puzzle(nfilas, ncolumnas);