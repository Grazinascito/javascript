const numeros = [1,2,3,4,5,6,7,8,9,10];

for(let numero of numeros){

    if(numero === 5 || numero === 2){
        continue; // o continue vai ignorar o numero 5 e prosseguir para o proximo numero
    }

    if(numero === 8){
        break; // já o break, como o nome já diz, quebra o código, ou seja, para de executar
    }
    console.log(numero)
}
