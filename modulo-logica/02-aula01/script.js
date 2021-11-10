const inputNome = document.querySelector('#nome');
const inputSobrenome = document.querySelector('#sobrenome');
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const form = document.querySelector('form');
const resultado = document.querySelector('.resultado');

const dados = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const objDados = {
        nome: inputNome.value,
        sobrenome: inputSobrenome.value,
        inputAltura: inputAltura.value,
        inputPeso: inputPeso.value
    }

    
    dados.push(objDados);
    
    if(inputNome.value === dados[0].nome){
            console.log('Já existe usuario com este nome')
            return;
        }

        console.log(dados)
    resultado.innerHTML += `<p>${nome.value} - ${sobrenome.value} - ${altura.value} - ${peso.value} </p>`;

});
    

