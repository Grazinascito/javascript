// the function with name 
// function myFunc(){
//     console.log(arguments);
// }

// myFunc("valor", 1, 2, 3, 4, 5);

function sumAll(){
    let total = 0;
    for(let argument of arguments){
        total += argument
    }

    console.log(total)
}

sumAll(1,2,3,4,5,6,7,8,9,10)

function cont(operador, acumulador, numeros){
    console.log(operador, acumulador, numeros)
}

cont('+', 0, ["café", "leite"], 1,2,3,4,5)