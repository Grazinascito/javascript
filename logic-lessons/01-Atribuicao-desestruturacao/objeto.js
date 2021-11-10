const pessoa = {
    nome: 0,
    sobrenome: 'Martin',
    dados: {
        rua: 'joao gomes 16',
        numero: 150
    }
};

const {nome = "sem nome", dados} = pessoa;
const { rua } = dados;

console.log(nome, dados );
