var ns = 'http://www.w3.org/2000/svg';

class escena{
    constructor(){
        this.spawn = document.getElementById("spawn");
        this.tiempoSpawn = 300;
        this.nuevoTiempoSpawn = 200;
        this.puntuacion = 0;
        this.puntuacionInicial = 0;
        this.textoPuntuacion = document.getElementById("textoPuntuacion");
        this.crearSuelo();
    }
    crearSuelo(){
        this.suelo = document.createElementNS(ns, "rect");
        this.suelo.setAttributeNS(null,'width', window.innerWidth);
        this.suelo.setAttributeNS(null,'id',"suelo");
        this.suelo.setAttributeNS(null,'height',80);
        this.suelo.setAttributeNS(null,'y',500);
        this.spawn.appendChild(this.suelo);
    }
    crearMuerte(){
        this.muerte = document.createElement("IMG");
        this.muerte.setAttribute('src',"./die.jpg");
        this.muerte.setAttribute('width',"100%");
        this.muerte.setAttribute('height',"100%");
        this.muerte.setAttribute('object-fit',"cover");
        document.getElementById("elDiv").setAttribute("hidden","");
        document.getElementById("muerte").appendChild(this.muerte);
    }
}

class personaje{
    constructor(){
        this.jugador;
        this.anchoalto = 50;
        this.posX = 30;
        this.posY = 450;
        this.velocidad = 3;
        this.saltando = false;
        this.inicioSalto = false;
        this.espacio = false;
        this.invulnerable = false;
        this.crearPersonaje();
    }

    crearPersonaje(){
        this.jugador = document.createElementNS(ns, "rect");
        this.jugador.setAttributeNS(null,'x',this.posX);
        this.jugador.setAttributeNS(null,'y',this.posY);
        this.jugador.setAttributeNS(null,'height',this.anchoalto);
        this.jugador.setAttributeNS(null,'width',this.anchoalto);
        escenas.spawn.appendChild(this.jugador);
    }

    saltar(){
        var posicionPesonaje = parseInt(this.jugador.getAttribute('y'));
        this.jugador.setAttribute('y',posicionPesonaje-this.velocidad);
        if(this.saltando){
            if (posicionPesonaje <= this.posY-100){
                this.jugador.setAttribute('y',(posicionPesonaje-this.velocidad));
                this.saltando = false;
            }
        }else{
            this.jugador.setAttribute('y',(posicionPesonaje+this.velocidad));
            if (posicionPesonaje == this.posY){
                this.jugador.setAttribute('y',this.posY);
                this.inicioSalto = false;
            }
        }
    }
}

class enemigo{
    constructor(){
        this.enemigo;
        this.enemX = 1600;
        this.enemY = 450;
        this.enemWidth = 40;
        this.enemHeight = 80;
        this.enemClass = "enemigo";
        this.nuevaVelocidadEnemigo = 10;
    }
    spawnEnemigo(){
        escenas.tiempoSpawn--;
        if(escenas.tiempoSpawn <= 0){
            escenas.tiempoSpawn= escenas.nuevoTiempoSpawn;
            this.crearEnemigo();
        }
    }
    crearEnemigo(){
        this.enemigo = document.createElementNS(ns, "rect");
        this.enemigo.setAttributeNS(null,'x',this.enemX);
        this.enemigo.setAttributeNS(null,'y',this.enemY);
        this.enemigo.setAttributeNS(null,'width',this.enemWidth);
        this.enemigo.setAttributeNS(null,'height',this.enemHeight);
        this.enemigo.setAttributeNS(null,'class',this.enemClass);
        escenas.spawn.appendChild(this.enemigo);
    }
    moverEnemigos(){
        var enemigoClass = document.getElementsByClassName(this.enemClass);
        var cantEnemigos = enemigoClass.length;
        for(var i=0;i<cantEnemigos;i++){
            enemigoClass[i].setAttribute('x',(enemigoClass[i].getAttribute('x')-this.nuevaVelocidadEnemigo));
        }
    }
    eliminarEnemigos(){
        var enemigoClass = document.getElementsByClassName(this.enemClass);
        var cantEnemigos = enemigoClass.length;
        for(var i=0;i<cantEnemigos;i++){
            if(enemigoClass[i].getAttribute('x')<=-100){
                enemigoClass[i].remove();
                personajes.invulnerable = false;
            }
        }
    }
}
var escenas = new escena;
var personajes = new personaje;
var enemigos = new enemigo;

document.body.onkeydown  = function (e){
    if(e.keyCode == 32 && !personajes.espacio){
        personajes.inicioSalto = true;
        personajes.saltando = true;
        personajes.espacio = true;
    }
}
document.body.onmousedown = function (e){
    if(e.button == 0 && !personajes.espacio){
        personajes.inicioSalto = true;
        personajes.saltando = true;
        personajes.espacio = true;
    }
}

var imagenes = document.getElementsByClassName("corazones");

function jugar(){
    if(personajes.inicioSalto){
        personajes.saltar();
    }
    var posicionPesonaje = parseInt(personajes.jugador.getAttribute('y'));
    var enemigoClass = document.getElementsByClassName(enemigos.enemClass);
    var cantEnemigos = enemigoClass.length;
    if(personajes.espacio){
        if(posicionPesonaje == 450){
            personajes.espacio = false;
        }
    }
    if(imagenes.length == 0){
        escenas.crearMuerte();
        clearInterval(empezar);
    }
    for(var i=0;i<cantEnemigos;i++){
        if(posicionPesonaje >= (475-personajes.anchoalto) && enemigoClass[i].getAttribute('x') <= (personajes.posX+personajes.anchoalto) && !personajes.invulnerable){
            if(imagenes.length > 0){
                imagenes[0].remove();
                personajes.invulnerable = true;
            }
        }else{
            escenas.puntuacion++;
            escenas.puntuacionInicial++;
            escenas.textoPuntuacion.innerHTML = "PUNTUACIÓN "+escenas.puntuacion;
        }
    }
    if (enemigos.nuevaVelocidadEnemigo > 0.5){
        if(escenas.puntuacionInicial >= 5000){
            enemigos.nuevaVelocidadEnemigo -= 0.2;
            escenas.puntuacionInicial = 0;
        }  
    }    
    enemigos.spawnEnemigo();
    enemigos.moverEnemigos();
    enemigos.eliminarEnemigos();
}
var empezar = setInterval('jugar()',60/1000);