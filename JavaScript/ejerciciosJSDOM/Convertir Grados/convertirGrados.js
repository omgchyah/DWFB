let tempInput = document.getElementById("temperatura");
const centSelector = document.getElementById("centigrado");
const fareSelector = document.getElementById("farenheit");
const btnConvertir = document.getElementById("convertir");
let mensaje = document.getElementById("mensaje");

function convertirGrados(temperatura) {
  temperatura = parseFloat(tempInput.value);

  if (isNaN(temperatura)) {
    return `Debes introducir un número válido.`
  }

  if (centSelector.checked) {
    return `${((temperatura * 9/5) + 32).toFixed(2)} ºF`;
  } else if (fareSelector.checked) {
    return `${((temperatura - 32) * 5/9).toFixed(2)} ºC`;
  } else {
    return `Debes seleccionar una opción.`
  }

}

btnConvertir.onclick = () => {
  mensaje.innerText = convertirGrados(tempInput);
}

tempInput.addEventListener("keypress", (event) => {
  if(event.key === "Enter") {
    btnConvertir.onclick();
  }
});