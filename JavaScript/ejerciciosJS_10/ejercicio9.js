let varUno = parseInt(prompt("ingresa la variable 1"));
let varDos = parseInt(prompt("Ingresa la variable 2"));

let cambiar = varUno;

varUno = varDos;
varDos = cambiar;

alert("Variable 1: " + varUno + ". Variable 2: " + varDos);