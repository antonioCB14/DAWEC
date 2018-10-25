/* Escribe un programa en JavaScript que consista en adivinar un número
previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador
2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar. */

var num_adivinar =parseInt(prompt("Número a adivinar: "));
var num =parseInt(prompt("Numero: "));
//Ejercicio 4.15
/*for (;;){
    if (num_adivinar == num){
        document.write("Has acertado el número<br>");
        break;
    }else if(num_adivinar != num){
        if(num>num_adivinar){
            num = prompt("El numero es mas pequeño: ");
        }else{
            num = prompt("El numero es mas grande: ");
        }
    }
}*/

//Ejercicio 4.16
do {
    if(num_adivinar != num){
        if(num > num_adivinar){
            num = parseInt(prompt("El numero es mas pequeño: "));
        }else{
            num = parseInt(prompt("El numero es mas grande: "));
        }
    }
} while (num_adivinar!=num)
document.write("Has acertado el número<br>");