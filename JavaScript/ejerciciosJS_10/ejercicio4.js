const mediaButton = document.getElementById("media");

function calcularMedia(){
  let n1 = parseInt(prompt("Ingresa el primer número: "));
  let n2 = parseInt(prompt("Ingresa el segundo número: "));
  let n3 = parseInt(prompt("Ingresa el tercer número: "));
  let media = (n1 + n2 + n3)/3

  let mediaRedondeada = media.toFixed(2);

  alert("La media de los 3 números es: " + mediaRedondeada);
}

mediaButton.onclick = calcularMedia;