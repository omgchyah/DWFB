import prompt from "prompt";
let nombre = prompt("Por favor, introduce tu nombre: ");

if (nombre != null) {
    alert("Hola, " + nombre + "!");
} else {
    alert("Has cancelado la entrada.");
}