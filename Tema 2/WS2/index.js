//Ws2 1,5,7,8

/* 1. Crea una página en la que se muestre:
• Un número aleatorio entre 0 y 1.
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un nº aleatorio entre esos dos valores. */
var aleatorio = Math.random();
document.write("0 y 1:  "+aleatorio+"<br>");
document.write("100 y 200: "+aleatorio * (200 - 100) + 100+"<br>");
var maximo = prompt("Valor máximo: ");
var minimo = prompt("Valor mínimo: ");
document.write("Máximo y mínimo: "+aleatorio * +((maximo - minimo) + minimo)+"<br>");

/* 5. Crea una web para resolver ecuaciones de segundo grado. Deberá pedir por
tanto los coeficientes y mostrar las soluciones posibles. */
var a = prompt("Coeficiente de x^2: ");
var b = prompt("Coeficiente de x: ");
var c = prompt("Coeficiente: ");
var ecuacion = (-b+(Math.sqrt(((Math.pow(b,2)-(4*a*c))))))/(2*a);
var ecuacion2 =(-b-(Math.sqrt(((Math.pow(b,2)-(4*a*c))))))/(2*a);
document.write("X es igual a: "+ecuacion+" o "+ecuacion2);

/* 7. Crea una web que genere una tabla con dos columnas. En la primera un
número ascendente y en la otra el valor de su seno. */
document.write("<table border='1' cellspacing='2'>");
for (var i=0;i<10;i++){
    document.write("<tr>");
    document.write("<td>"+i+"</td>");
    document.write("<td>"+Math.sin(i)+"</td>");
    document.write("</tr>");
}
document.write("</table>");

/* 8. Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles. */
var img1 = "https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547";
var img2 = "https://t3.kn3.net/taringa/4/1/E/2/0/5/elmemorioso/580.jpg";
var img3 = "https://k30.kn3.net/taringa/7/7/9/8/3/D/guitar_gero/2B1.jpg";
var azar = Math.round(Math.random() * (3 - 1) + 1);
switch (azar){
    case 1:
        document.write("<img src="+img1+">");
        break;
    case 2:
        document.write("<img src="+img2+">");
        break;
    case 3:
        document.write("<img src="+img3+">");
        break;
}

