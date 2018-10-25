//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
function suma(){
    var p = 0;
    for (var i=0;i<arguments.length;i++){
        p += arguments[i];
    }
    document.write("Suma: "+p+"<br>");
}

suma(3,4,6,10);

//Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.
function addOnlyNums(){
    var p = 0;
    for (var i=0;i<arguments.length;i++){
        if (typeof(arguments[i])==='number'){
            p += arguments[i];
        }
    }
    document.write("Only numbers: "+p+"<br>");
}

addOnlyNums('perro',1,2,'gato',500);

//Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.
function countTheArgs(){
    document.write("Count The Args: "+arguments.length+"<br>");
}

countTheArgs(1,2,3,4,5,6,7,8,9,'perro','gato');

//Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
function combineTwoArrays(){
    for (var i=0;i<arguments.length;i++){
        document.write(...arguments[i]);
    }
}

combineTwoArrays(['Combine Two Arrays: '],[1,2,3],[4,5,6,7,8],['<br>']);

//Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.
function sumEveryOther(){
    var p=0;
    for (var i=0;i<arguments.length;i++){
        if(i%2 == 0){
            p += arguments[i];
        }
    }
    document.write("Sum Every Other: "+p+"<br>");
}

sumEveryOther(10, 2, 11);

//Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.
function onlyUniques(){
    document.write("Only Uniques: "+ [...new Set(arguments)] +"<br>");
}

onlyUniques(1,1,1,2,3,4,4,5,'perro','perro');

//Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.
function combineAllArrays(){
    for (var i=0;i<arguments.length;i++){
        document.write(...arguments[i]);
    }
}
combineAllArrays(['Combine All Arrays: '],[1,2,3],[4,5,6],[7,8,9],['<br>']);

//Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.
function squareAndSum(){
    p = 0;
    for (var i=0;i<arguments.length;i++){
        p += Math.pow(arguments[i],2);
    }
    document.write("Square And Sum"+p+"<br>");
}
squareAndSum(2, 4, 3);
squareAndSum(1, 2);