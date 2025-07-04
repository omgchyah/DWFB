let personasInputE8 = document.getElementById("personasE8");
let mensajeE8 = document.getElementById("mensajeE8");
const btnE8 = document.getElementById("calcularE8");

function tortillaPatatas(numero) {
  let persona = parseInt(numero);
  let patata = persona * 200 / 1000;
  let huevo = patata * 5;
  let cebolla = patata * 300;

  return `Lista de ingredientes para ${persona} persona(s):
    🥔 Patata(s): ${patata} kilo(s)
    🥚 Huevo(s): ${huevo} unidad(es)
    🧅 Cebolla: ${cebolla} gramos`;
}

btnE8.onclick = () => {
  const valor = parseInt(personasInputE8.value);

  if (isNaN(valor) || valor < 1) {
    mensajeE8.innerText = "Por favor, ingresa un número mayor a 0.";
  } else {
    mensajeE8.innerText = tortillaPatatas(valor);
  }
}

personasInputE8.addEventListener("keypress", (event) => {
  if(event.key === "Enter") {
    btnE8.onclick();
  }
});
