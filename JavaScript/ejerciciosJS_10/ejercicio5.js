const consumoGasolina = document.getElementById("consumo");

function calcularConsumo(){
  let numLitros = parseFloat(prompt("Ingresa número de litros"));
  let numKm = parseFloat(prompt("Ingresa el número de kilometros"));

  let media = numLitros / numKm;

  let mediaRedondeada = media.toFixed(2);

  alert("el consumo es: " + mediaRedondeada);
}

consumoGasolina.onclick = calcularConsumo;

