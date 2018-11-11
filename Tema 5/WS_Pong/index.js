var circulo = document.getElementById("circulo");
var pala1 = document.getElementById("rect1");
var pala2 = document.getElementById("rect2");
var velX = 2;
var velY = 1;
var velMov = 10;

document.addEventListener('keydown', 
function moverPalas(event){
    key = event.keyCode;

    //Paleta izquierda
    posPala1 = parseInt(pala1.getAttribute("y"));
    if(key == 87){
        if(posPala1 >= 5){
            pala1.setAttribute("y", (posPala1 - velMov));
        }
    }
    if(key == 83){
        if(posPala1 <= 345){
            pala1.setAttribute("y", (posPala1 + velMov));
        } 
    }

    //Paleta derecha
    posPala2 = parseInt(pala2.getAttribute("y"));
    if(key == 38){
        if(posPala2 >= 5){
            pala2.setAttribute("y", (posPala2 - velMov));
        }
    }
    if(key == 40){
        if(posPala2 <= 345){
            pala2.setAttribute("y", (posPala2 + velMov));
        } 
    }
});
function moverBola(){
    //Paleta izquierda
    posPala1 = parseInt(pala1.getAttribute("y"));
    altoPala1 = parseInt(pala1.getAttribute("height"));
    posPala1X = parseInt(pala1.getAttribute("x"));

    //Paleta derecha
    posPala2 = parseInt(pala2.getAttribute("y"));
    altoPala2 = parseInt(pala2.getAttribute("height"));
    posPala2X = parseInt(pala2.getAttribute("x"));

    //Cogemos la posicion de la bola
    var posX = parseInt(circulo.getAttribute('cx'));
    var posY = parseInt(circulo.getAttribute('cy'));
  
    //Establecemos los limites de izquierda a derecha y hacemos que rebote
    if (posX > 955 || posX < 35){
        velX = velX*-1;
    }
    //Establecemos los limites de arriba a abajo y hacemos que rebote
    if (posY > 465 || posY < 35){
        velY = velY*-1;
    }
    //Rebote con la pala 1
    if (posY >= posPala1 && 
        posY <= (posPala1+altoPala1) && 
        posX < (posPala1X+50)){
            velX = velX*-1;
            velY = velY*-1;
    }
    //Rebote con la pala 2
    if (posY >= posPala2 && 
        posY <= (posPala2+altoPala2) && 
        posX > (posPala2X-25)){
            velX = velX*-1;
            velY = velY*-1;
    }
    // Movemos la bola
    circulo.setAttribute('cx',(posX+velX));
    circulo.setAttribute('cy',(posY+velY));
}
var fps = 60;
setInterval('moverBola()',(fps/1000));