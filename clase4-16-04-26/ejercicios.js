//Ejercicio 1 - La prueba de la flota:

/*1. Crea un array con 10 objetos, donde cada objeto represente un automovil
con la siguiente informacion:
* Marca
* Modelo
* Año
* Color */

const automoviles = [
    { marca : 'Crevrolet', modelo : 'Celta', año : 2005, color : 'blanco',},
    { marca : 'Nissan', modelo : 'Sentra', año : 2025, color : 'azul',},
    { marca : 'Ford', modelo : 'Falcon', año : 2005, color : 'rojo',},
    { marca : 'Crevrolet', modelo : 'Equinox', año : 2005, color : 'negro',},
    { marca : 'Nissan', modelo : 'Kicks', año : 2026, color : 'blanco',},
    { marca : 'Crevrolet', modelo : 'Colorado', año : 2020, color : 'gris',},
    { marca : 'Fiat', modelo : 'Cronos', año : 2005, color : 'blanco',},
    { marca : 'Fiat', modelo : 'Siena', año : 2019, color : 'blanco',},
    { marca : 'Nissan', modelo : 'Versa', año : 2022, color : 'gris',},
    { marca : 'Ford', modelo : 'Ranger', año : 2023, color : 'azul',},
];

for(auto of automoviles) {
    console.log(auto);
}

//Ejercicio 2 - Analisis de Colores:

/*
1. Crea una funcion que recorra el array de automoviles.
2. Usa destructuring dentro de la funcion para obtener el color de cada automovil
3. La funcion debe aceptar un color como parametro y devolver por consola cuantos automoviles tienen ese color
*/

function colorAutomovil(color) {
    let count = 0;
    for (const {color : autoColor} of automoviles) {
        if(autoColor === color) {
            count++;
        }
    }
    console.log(`La cantidad de automoviles con el color '${color}' son: ${count}`);
}


colorAutomovil('blanco');