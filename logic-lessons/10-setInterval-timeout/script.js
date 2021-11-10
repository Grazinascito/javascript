const mostraHora = () => {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
};

console.log(mostraHora());

const contador = setInterval(() => console.log(mostraHora()), 1000);

setTimeout(() => clearInterval(contador), 5000);

// O set interval vai apontar um intervalo de tempo para que a função seja executada

