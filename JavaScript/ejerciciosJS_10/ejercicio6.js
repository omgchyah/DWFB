const horasInput = document.getElementById("horas");
const minutosInput = document.getElementById("minutos");
const calcularBtn = document.getElementById("segundos");

function calcularSegundos() {
  let horas = parseInt(horasInput.value);
  let minutos = parseInt(minutosInput.value);

  let totalMinutos = (horas * 60) + minutos;
  let totalSegundos = totalMinutos * 60;

  alert(`Son ${totalSegundos} segundos`);
}

calcularBtn.onclick = calcularSegundos;