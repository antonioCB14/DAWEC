/* 2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. */
lanzamiento();
function lanzamiento(){
    var aleatorio = Math.round(Math.random() * (6 - 1) + 1);
    return aleatorio;
}
//document.write(lanzamiento());

/* 3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores. */
var sale1 = 0;
var sale2 = 0;
var sale3 = 0;
var sale4 = 0;
var sale5 = 0;
var sale6 = 0;
for (var i=0;i<6000;i++){
    lanzamiento();
    switch (lanzamiento()){
        case 1:
            sale1++;
            break;
        case 2:
            sale2++;
            break;
        case 3:
            sale3++;
            break;
        case 4:
            sale4++;
            break;
        case 5:
            sale5++;
            break;
        case 6:
            sale6++;
            break;
        default:
            document.write("<br>Algo raro");
            break;
    }
}
document.write("Sale 1: "+sale1+" veces");
document.write("<br>Sale 2: "+sale2+" veces");
document.write("<br>Sale 3: "+sale3+" veces");
document.write("<br>Sale 4: "+sale4+" veces");
document.write("<br>Sale 5: "+sale5+" veces");
document.write("<br>Sale 6: "+sale6+" veces");

// 6. Crea una función para calcular potencias de un modo recursivo.
function potencias(numero,potencia)
{
    if (potencia < 0) {
        return -1;
    }
    else if (potencia == 0) {
        return 1;
    }
    var numero = potencia;
    while (potencia-- > 2) {
        numero *= potencia;
    }
    return numero;
}

var numero = prompt("Introduce el numero al que calcular la potencia: ");
var potencia = prompt("Introduce la potencia: ");
document.write("<br>"+potencias(numero,potencia));


/* 7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10. */
var f = [];
a = function factorial (n) {
        if (n == 0 || n == 1)
            return 1;
        if (f[n] > 0)
            return f[n];
        return f[n] = factorial(n-1) * n;
    }
document.write("<table border=1>");
for (var i=1;i<=10;i++){
    document.write("<tr><td>"+i+"</td><td>"+a(i)+"</td></tr>");
}
document.write("</table>");