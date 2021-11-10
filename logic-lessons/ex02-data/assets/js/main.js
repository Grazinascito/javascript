const h1 = document.querySelector('.container h1');

const date = new Date();

const day = date.getDay();
const todayDate = date.getDate();
const hour = date.getHours();
const year = date.getFullYear();
const minutes = date.getMinutes();

const dayWeek = ['Domingo', 'Segunda-feira', 'Terça-feira','Quarta-feira', 'Quinta-feira', 'Sexta-feira','Sábado'];

const month = date.toLocaleString('default', {month: 'long'});


h1.textContent = `${dayWeek[day]}, ${todayDate} de ${month} de ${year} - ${hour}:${minutes < 10? 0: ''}${minutes} `;