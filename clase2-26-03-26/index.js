// console.log("Hola, Node.js!");

//console.log(window); // DOM
//console.log(document); // DOM

//-------------- VARIABLE
let nombre;

nombre = "Maria";
nombre = "Ana";

//-------------- VARIABLE CONSTANTE
const apellido = "Perez";

console.log(nombre);
console.log(apellido);
console.log(nombre, apellido);

//debilmente tipado, puedo cambiar el tipo de dato de una variable
nombre = 123; 
console.log(nombre)

console.log(typeof(nombre));

let edad = 32;
console.log("Tu edad es:", edad, "y tu apellido es:", apellido);

//--------------FS: SISTEMA DE ARCHIVOS
const fs = require('fs');

fs.writeFileSync('hola.txt', 'Hola Node.js!\n');

require("fs").appendFileSync('hola.txt', 'prueba directa de fs con append!\n');

require("fs").appendFileSync('hola.txt', 'otra prueba\n');

//lectura de archivo

const contenido = fs.readFileSync('hola.txt', 'utf-8');

console.log(contenido)

//-------------- ASINCRONIA
//se ejecuta en este orden: 1 4 2 3
console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// setTimeout(() => {
//     console.log(3);
// }, 2000);

console.log(4);

//-------------- FUNCION

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar('Luciano');

//-------------- MANEJO DE ARCHIVOS CON TIMEOUT

const fs2 = require("fs");

console.log("Inicio");

fs2.writeFileSync("resumen.txt", "Node ejecuta JS y trabaja con archivos");

setTimeout(() => {
    console.log("Evento ejecutado");
}, 0);

console.log("Fin");

fetch('datos.json')