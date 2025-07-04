const precio = document.getElementById("precio");
//const boton = document.getElementById("precioIva");

function calcularPrecioConIVA() {
  const precioBase = parseFloat(precio.value);

  if (isNaN(precioBase) || precioBase <= 0) {
    alert("Por favor, introduce un precio válido.");
    return;
  }

  const iva = 21;
  const precioFinal = precioBase + (precioBase * iva / 100);

  alert(`El precio final con IVA es: ${precioFinal.toFixed(2)} €`);
}

document.getElementById("precioIva").onclick = calcularPrecioConIVA;
