// alert("'Alerta desde archivo externo'");
console.log("Esta es la consola 😘");
console.log("también es un string");

let nombreUsuario = "Rossana";
let edad = 38;

console.log("Mi nombre es " + nombreUsuario + " y tengo " + edad + " años.");

let n1 = 33;
let n2 = 55;
console.log(n1 + n2);

// let numero1 = parseInt(prompt("ingrese un número"));
// let numero2 = parseInt(prompt("ingrese un número"));

// let resultado = numero1 + numero2;

// console.log(resultado);

let resultado2 = 10 === "10";
console.log(resultado2);

let resultado3 = true || false;
console.log(resultado3);

// let stringUsuario = prompt('Escriba "JavaScript"');

// if(stringUsuario === "JavaScript") {
//     console.log("correcto");
// } else {
//     console.log("falso");
// }

let opcionUsuario = prompt(`Elija una opción:
    1: Libros
    2: Películas
    3: Juegos
    `);

console.log(opcionUsuario);

switch(opcionUsuario) {
    case '1':
        console.log("Principito");
        break;
    case '2':
        console.log("Matrix");
        break;
    case '3':
        console.log('NFS')
        break;
    default:
        console.log("Opción no válida.");
        break;
}

let frutas = ["piña", "plátano"]

for (let fruta of frutas) {
    console.log(fruta);
}

let edad1 = 50;

for (let letra of edad1) {
    console.log(letra);
}