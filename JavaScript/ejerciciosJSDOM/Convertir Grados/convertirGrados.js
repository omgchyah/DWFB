//Declarar variables y constantes
//Texto de usuario
let tempInput = document.getElementById("temperatura");
//Botones de radio
const centSelector = document.getElementById("centigrado");
const fareSelector = document.getElementById("farenheit");
//Botón de convertir
const btnConvertir = document.getElementById("convertir");
//texto de los radios de temperatura
const textoUnidadC = document.getElementById("unidadTextoC");
const textoUnidadF = document.getElementById("unidadTextoF");

//Function para convertir la temperatura
function convertirGrados(temp) {
  let temperatura = parseFloat(temp);
  //Validación
  if (isNaN(temperatura) || (!temperatura)) {
    alert("Debes introducir un número válido.");
    return;
  }

  //Condición depende del radio que esté seleccionado centSelector.checked o fareSelector.checked
  if (centSelector.checked) {
    return `${temperatura}ºC= ${((temperatura * 9 / 5) + 32).toFixed(2)} ºF`;
  } else if (fareSelector.checked) {
    return `${temperatura}ºF= ${((temperatura - 32) * 5 / 9).toFixed(2)} ºC`;
  } else {
    alert("Debes seleccionar una opción.");
  }
}

//Llama a la función y agrega un mensaje desde de la etiqueta p
btnConvertir.onclick = () => {
  let resultado = convertirGrados(tempInput.value);

  if (resultado) {
    let resultElement = document.getElementById("resultado");

    if (!resultElement) {
      resultElement = document.createElement("p");
      resultElement.id = "resultado";
      document.querySelector(".user-input").appendChild(resultElement);
    }
    resultElement.innerText = resultado;
  }
  
}

//Llama a la función si el usuario presiona enter cuando está dentro de la caja de números
tempInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btnConvertir.onclick();
  }
});

//Función para cambiar a negrita el texto si selecciona el radio
function updateLabels() {
  if (centSelector.checked) {
    textoUnidadC.style.fontWeight = "bold";
    textoUnidadF.style.fontWeight = "normal";
  } else if (fareSelector.checked) {
    textoUnidadF.style.fontWeight = "bold";
    textoUnidadC.style.fontWeight = "normal";
  }
}

centSelector.addEventListener("change", updateLabels);
fareSelector.addEventListener("change", updateLabels);
