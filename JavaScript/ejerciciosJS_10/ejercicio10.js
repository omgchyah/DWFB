const numInput = document.getElementById("num");
const btn = document.getElementById("boton");

function esPar(){
  let resultado = parseInt(numInput.value) % 2 == 0;

  if(resultado) {
    alert(`El número ${numInput.value} es par.`);
  } else {
    alert(`El número ${numInput.value} es impar.`);
  }
}

btn.onclick = esPar;