const divizinha = document.querySelector(".divizinha");

const elementos = [
  { tag: "p", texto: "frase 1" },
  { tag: "div", texto: "frase 2" },
  { tag: "footer", texto: "frase 3" },
  { tag: "section", texto: "frase 4" },
];

for (let i = 0; i < elementos.length; i++) {
  const tag = elementos[i].tag;

  const criaTag = document.createElement(tag);
  criaTag.textContent = elementos[i].texto;
  divizinha.appendChild(criaTag);
}

//exemplo de criação de um elemento html
// const divizinha = document.querySelector('.divizinha');

// const criadiv = document.createElement('div')
// criadiv.innerHTML = 'banana frita'
// divizinha .appendChild(criadiv)
