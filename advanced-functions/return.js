function criaPessoa(nome, sobrenome) {
  return { primeiroNome: nome, segundoNome: sobrenome };
}

const p1 = criaPessoa("Grazi", "Nascito");
const p2 = {
  nome: "Jao",
  sobrenome: "Silva",
};

console.log(typeof p1);
console.log(typeof p2);
