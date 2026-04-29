
//funciones, Arrays y Methods

//funcion sin argumento
function saludar() {
    console.log("saludar, sin argumento")
}
saludar();

//funcion con argumento
function saludarNombre(nombre) {
    console.log(`Hola: ${nombre}`)
}
saludarNombre("Luciano, con argumento");

//funcion retorno saludo
function retornoSaludo(nombre) {
    const respuesta = `Hola: ${nombre}, con argumento y return`
    return respuesta;
}
const mensaje = retornoSaludo("Martin");
console.log(mensaje);

//funcion calculo con  argumento pasado por valor y return
function calcularIva(precio) {
    const precioConIva = precio * 1.21;
    return precioConIva;
}
const resultado = calcularIva(100);
console.log(`El precio con IVA es: ${resultado}`);

//funciones expresadas -> la base para las func anonimas
const calcularIvaExpresada = function (precio) {
    const precioConIva = precio * 1.21;
    return precioConIva;
}

//funcion flecha
const calcularIvaFlecha = (precio) => {
    const precioConIva = precio * 1.21;
    return precioConIva;
}

//funcion flecha simplificada
const calcularIvaFlechaSimp = (precio) => precio * 1.21;
console.log(`El precio de la func flecha simplificada es: ${calcularIvaFlechaSimp(100)}`);

