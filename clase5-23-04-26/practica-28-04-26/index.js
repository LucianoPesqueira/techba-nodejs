//__dirname: direccion absoluta de la carpeta, en commonjs funciona, en module no es declarada
//console.log(__dirname); ///home/lucianonp/Documentos/Tech-Ba/techba-nodejs/clase5-23-04-26/practica-28-04-26

//obtener el dirname en module:
// import { dirname } from "node:path";
// import { fileURLToPath } from "node:url";

// const __filename = fileURLToPath(import.meta.url); //saca el file:
// export const __dirname = dirname(__filename);

//console.log(__dirname);

//-------
//utilizando commonjs en prueba.js
//require("./prueba/prueba.js");
//console.log(__dirname); ///home/lucianonp/Documentos/Tech-Ba/techba-nodejs/clase5-23-04-26/practica-28-04-26

//---------
//chequear si existe la carpeta sino crearla con module
// import fs from "fs";

// if (!fs.existsSync("prueba3")) {
//   fs.mkdirSync("prueba3");
// } else if (fs.existsSync("prueba3")) {
//   console.log("Ya existe la carpeta");
// } else {
//   console.log("error");
// }

//----------------

//commonjs para saludar.js
const { saludar } = require("./prueba/saludar.js");

const nombre = process.argv[2];

console.log(saludar(nombre));
