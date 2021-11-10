const info = document.querySelector('.info');
const resultado = document.querySelector('.resultado-positivo');


const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso)
    console.log(altura)

    const imc = peso/(altura*altura);
    
    if(imc <= 0){
        paragrafo.classList.add('resultado-invalido');
        return paragrafo.innerHTML = `Valor invalido`
    }

    const paragrafo = document.createElement('p');
    info.appendChild(paragrafo);


    if(!peso || !altura){
        paragrafo.classList.add('resultado-invalido');
        return paragrafo.innerHTML = `Valor invalido`
    }else if(imc < 18.5){
        paragrafo.classList.add('resultado-positivo');
        return paragrafo.innerHTML = `Seu Imc está em ${imc.toFixed(2)} = MAGREZA`
    }else if(imc >= 18.5 && imc <= 24.9){
        paragrafo.classList.add('resultado-positivo');
        return paragrafo.innerHTML = `Seu Imc está em ${imc.toFixed(2)} = NORMAL`
    }else if(imc >= 25 && imc <= 29.9){
        paragrafo.classList.add('resultado-positivo');
        return paragrafo.innerHTML = `Seu Imc está em ${imc.toFixed(2)} = SOBREPESO I`
    }else if(imc >= 30 && imc <= 39.9){
        paragrafo.classList.add('resultado-positivo');
        return paragrafo.innerHTML = `Seu Imc está em ${imc.toFixed(2)} = SOBREPESO II`
    }else if(imc >= 40){
        paragrafo.classList.add('resultado-positivo');
        return paragrafo.innerHTML = `Seu Imc está em ${imc.toFixed(2)} = SOBREPESO III`
    }else if(!peso || !altura || imc <= 0){
        paragrafo.classList.add('resultado-invalido');
        return paragrafo.innerHTML = `Valor invalido`
    }else{
        paragrafo.classList.add('resultado-invalido');
        return paragrafo.innerHTML = `Valor invalido`
    }
    
    paragrafo.innerHTML = "";

    
});








// IMC	CLASSIFICAÇÃO	OBESIDADE (GRAU)
// MENOR QUE 18,5	MAGREZA	0
// ENTRE 18,5 E 24,9	NORMAL	0
// ENTRE 25,0 E 29,9	SOBREPESO	I
// ENTRE 30,0 E 39,9	OBESIDADE	II
// MAIOR QUE 40,0	OBESIDADE GRAVE	III

//IMC = peso/(altura*altura)

