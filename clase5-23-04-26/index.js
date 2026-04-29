const math = require("./math.js");
//const {sumar} = require("./math.js"); forma de desestructurar la función sumar
const cowsay = require("cowsay");

const suma = math.sumar(3, 4);
//const suma = sumar(3, 4); con la desestructuracion no requiere de math.sumar

const resta = math.restar(8, 4);

console.log(`la suma es: ${suma}`);
console.log(`la resta es: ${resta}`);

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  }),
);

//modulo nativo de node

console.log(process.argv); //argumentos de la linea de comandos en forma de array
//si ejecuto npm start hola mundo me retorna: primero el contenido de "start": "node index.js" y luego los argumentos que le pasemos
/*[
  '/usr/bin/node-22',
  '/home/lucianonp/Documentos/Tech-Ba/curso_TechBA_NodeJS/clase5-23-04-26/index.js',
  'hola',
  'mundo'
] */

const args = process.argv.slice(2); //si quiero evitar los dos primeros argumentos que contiene start

// npm start GET, POST, PUT, DELETE
if ("GET" == args[0]) {
  console.log("GET...");
} else if ("POST" == args[0]) {
  console.log("POST...");
} else if ("PUT" == args[0]) {
  console.log("PUT");
} else if ("DELETE" == args[0]) {
  console.log("DELETE...");
}
