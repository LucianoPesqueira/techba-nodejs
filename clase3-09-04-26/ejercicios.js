const precios = [100, 30, 150, 120, 200];

//ej 1:
console.log("Ejercicio 1: ")
const preciosIva = precios.map((precio) => precio * 1.21);

console.log(precios, preciosIva, "\n");


//ej:2
console.log("Ejercicio 2: ")
precios.forEach((precio) => console.log(`El precio es: ${(precio * 1.21).toFixed(2)}.- IVA incluido.`))