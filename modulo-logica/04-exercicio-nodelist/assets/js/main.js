const container = document.querySelector(".container");
const h1s = document.querySelectorAll(".container h1");

console.log(h1s);

const styleBody = getComputedStyle(document.body);

const backgroundColor = styleBody.backgroundColor;

console.log(backgroundColor);

for (valor of h1s) {
    valor.style.backgroundColor = backgroundColor;
    valor.style.color = "#fff";
  console.log(valor);
}

