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