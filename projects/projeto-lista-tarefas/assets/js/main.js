const inputTarefa = document.querySelector(".input-tarefa");
const buttonTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");
const buttonRemove = document.querySelector(".btn-remove");

const criaLi = () => {
  const li = document.createElement("li");
  tarefas.appendChild(li);

  li.textContent = inputTarefa.value;

  li.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });
};

buttonTarefa.addEventListener("click", (event) => {
  event.preventDefault();

  if (!inputTarefa.value) return;

  criaLi();
  inputTarefa.value = "";
});

buttonRemove.addEventListener("click", (event) => {
  event.preventDefault();

  tarefas.innerHTML = "Lista excluída com sucesso";
});
