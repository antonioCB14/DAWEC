/*5. Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array. */


/*var arrayParesImpares = [];
function paresImpares(){
    for(var i=1;i<=100;i++){
        arrayParesImpares.push(Math.round(Math.random()*(1000-1)+1));
    }
}
paresImpares();
document.write("<table border=1>");
arrayParesImpares.forEach(function(parimpar) {
    if (parimpar%2 == 0){
        document.write("<br>"+parimpar);
    }
    else{
        document.write("<br>"+parimpar);
    }
});
document.write("</table>"); */

/* 7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios. */
var arrayejemplo = new Array(10);
for (var i=0;i<10;i++){
    arrayejemplo.push(0);
}
arrayejemplo.forEach(todo => 1+todo);
arrayejemplo.forEach(todo => document.write("<br>"+todo));

/* 8. Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones. */

/*var dado1 = 0;
var dado2 = 0;
for (var i=0;i<36000;i++){
    dado1 = Math.round(Math.random()*(6-1)+1);
    dado2 = Math.round(Math.random()*(6-1)+1);
    document.write("<br>"+(dado1+dado2));
}*/


//Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):
//a) find largest number
var arrayA = [1,2,3,4,5,6,7,8,9];
document.write("<br>a) Find largest number: "+Math.max(...arrayA));

//b) find longest string
var arrayB = ["Hola","Adios","Jose Antonio","The Witcher","Alcachofa"];
var longitud = "";
var posicion = 0;
for (var i=0;i<arrayB.length;i++){
    if(arrayB[i].length > longitud){
        longitud = arrayB[i].length;
        posicion = i;
    }
}
document.write("<br>b) Find longest string: "+arrayB[posicion]+"   "+ longitud);

//c) find even numbers
var arrayC = [1,2,3,4,5,6,7,8,9];
document.write("<br>c) Find even numbers: ");
for (var i = 0; i < arrayC.length; i++) {
    if(i % 2 === 0) {
        document.write("<br>"+i);
    }
}

//d) find odd numbers
var arrayD = [1,2,3,4,5,6,7,8,9];
document.write("<br>d) Find odd numbers: ");
for (var i = 0; i < arrayD.length; i++) {
    if(i % 2 != 0) {
        document.write("<br>"+i);
    }
}

//e) find words that contain 'is'
var arrayE = ["Hola","Adios","Jose Antonio","The Witcher","Alcachofa","Anis"];
document.write("<br>e) Find words that contain 'is': ");
for (var i=0;i<arrayE.length;i++){
    if(arrayE[i].indexOf('is') != -1){
        document.write("<br>"+arrayE[i]);
    }
}

//f) assert all numbers are divisible by three
var arrayF = [1,2,3,4,5,6,7,8,9];
document.write("<br>f) Assert all numbers are divisible by three: ");
for (var i = 0; i <= arrayF.length; i++) {
    if(i % 3 === 0) {
        document.write("<br>"+i);
    }
}

//g)  zip two arrays together
var arrayG = [1,2,3,4,5,6,7,8,9];
var arrayG2 = ["Hola","Adios","Jose Antonio","The Witcher","Alcachofa","Anis"];
var arrayGzip = arrayG.map(function (e,i){
    return [e, arrayG2[i]];
});
document.write("<br>g) Zip two arrays together: ");
document.write("<br>"+arrayGzip)

//h) sort joined array from smallest to largest
var arrayH = [1,3,123,59,0,13,55,9];
document.write("<br>h) Sort joined array from smallest to largest: ");
document.write("<br>"+arrayH.sort());

//i) remove the first word in the array
var arrayI = ["Hola","Adios","Jose Antonio","The Witcher","Alcachofa","Anis"];
arrayI.shift();
document.write("<br>i) Remove the first word in the array: ");
document.write("<br>"+arrayI);

//j) place a new word at the start of the array
var arrayJ = ["Hola","Adios","Jose Antonio","The Witcher","Alcachofa","Anis"];
arrayJ.unshift("Trompeta");
document.write("<br>j) Place a new word at the start of the array: ");
document.write("<br>"+arrayJ);

//k) replace some elements
var arrayK = ["Hola","Adios","Jose Antonio","The Witcher","Alcachofa","Anis"];
var aleatorio = Math.round(Math.random()*(arrayK.length-0)+0);
arrayK[aleatorio] = "Cambio";
document.write("<br>k) Replace some elements: ");
document.write("<br>"+arrayK);