// array
const numbers = [100, 150, 10, 4, 67];

console.log(numbers);
console.log(numbers[3]);
console.log("length: " + numbers.length);

numbers.push(88); //añade un elemento al final
console.log(numbers);

numbers.splice(2, 0, 5);//añade un elemento incando en que posicion inicial, elementos eliminados, elemento añadido
console.log(numbers);

numbers[3] = 33; //cambio el valor indicado por otro nuevo
console.log(numbers);

//obtener el ultimo valor
const lastNum = numbers[numbers.length - 1];
console.log(lastNum);


const nombres = ["Juan", "Maria", "Pedro", "Ana"];
//recorrer array con forEach
nombres.forEach((nombre) => console.log(nombre));

//ejemplo map
const names = nombres.map(nombre => nombre + '!!!');
console.log(nombres, names);

//filter
const precios = [100, 50, 30, 10, 99];

const preciosFiltrados = precios.filter(precio => precio >= 30);

console.log(preciosFiltrados);