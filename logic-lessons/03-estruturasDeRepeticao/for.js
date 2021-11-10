// const frutas = ['maçã', 'pera', 'uva'];

// for(i in frutas){
//     console.log(frutas[i])
// }

// o for in -> lê o indice 
// quando precisamos acessar um objeto, o for in lê a chave do objeto:

// const obj = {
//     nome: 'Ana',
//     idade: 15,
//     asdasdas: "sadasdas"
// }

// for( key in obj){
//     console.log(`${key}: ${obj[key]}`)
// }

// for of
// A diferença do for of, é que ele retorna o valor e não o indice

const frutas = ['uva', 'banana', 'abacate'];

for( key in frutas){
    console.log("in:", key);
    console.log("in:", frutas[key]);
}

//for of não pega o indice
for( valor of frutas){
    console.log("of: ", valor);
    console.log("of: ", frutas[valor]); // undefined
}

//pra ficar mais fácil, o for in vai retornar a propriedade enquanto o for of retorna o valor
//for in: chave
//for of: valor