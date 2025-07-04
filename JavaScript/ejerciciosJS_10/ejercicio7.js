let numInputE7 = document.getElementById("numE7");
const btnE7 = document.getElementById("btnE7");
let mensajeE7 = document.getElementById("mensajeE7");

function decenasUnidades(unidad) {
  let numero = parseInt(unidad);
  const decenas = Math.floor(numero / 10);
  const unidades = numero % 10;

  return `Decena: ${decenas} y Unidades: ${unidades}`;
}

btnE7.onclick = () => {
  const valor = numInputE7.value;

  if (!isNaN(valor) && valor >= 1 && valor <= 99) {
    mensajeE7.innerText = decenasUnidades(valor);
  } else {
    mensajeE7.innerText = "❌❌Introduce un número válido del 1 al 99.❌❌";
  }

};

numInputE7.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btnE7.onclick();
  }
});
