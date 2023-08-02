const dia = window.document.getElementById("dia");
const hora = window.document.getElementById("hora");
const minuto = window.document.getElementById("minuto");
const segundo = window.document.getElementById("segundo");

const lancamento = "30 nov 2023";
const dataLancamento = new Date(lancamento);

function CountDown() {
  let hoje = new Date();

  let segundosTotal = (dataLancamento - hoje) / 1000;

  let diasRestantes = Math.floor(segundosTotal / 60 / 60 / 24);
  let horRestantes = Math.floor((segundosTotal / 60 / 60) % 24);
  let minRestantes = Math.floor((segundosTotal / 60) % 60);
  let segRestantes = Math.floor(segundosTotal % 60);

  dia.innerHTML = `${formatText(diasRestantes)}D`;
  hora.innerHTML = `${formatText(horRestantes)}H`;
  minuto.innerHTML = `${formatText(minRestantes)}M`;
  segundo.innerHTML = `${formatText(segRestantes)}S`;
}

function formatText(tempo) {
  if (tempo < 10) {
    return `0${tempo}`;
  } else {
    return tempo;
  }
}

setInterval(CountDown, 1000);

//HIGH LIGHT

function highLight(selector) {
  var card = document.querySelector(selector);

  card.classList.toggle("ticket-ligter");
}

//TICKET SELECT

const tickets = [];

let selectTicket = (selector) => {
  var element = document.querySelector(selector);
  element.classList.toggle("ticket-selected");

  console.log(tickets);

  if (tickets.includes(selector)) {
    tickets.pop(selector);
  } else {
    tickets.push(selector);
  }

  console.log(tickets);
}

let showTickets = () => {
  if (tickets.length > 0) alert(`Ingressos Selecionados: ${tickets}`);
}
