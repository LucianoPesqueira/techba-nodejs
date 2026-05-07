console.log(process.argv);
/*
[
  '/usr/bin/node-22',
  '/home/lucianonp/Documentos/Tech-Ba/techba-nodejs/clase6-30-04-26/practica-05-05-26/practica.js',
  'GET',
  'products/7'
]
*/

// const method = process.argv[2];
// const endPoint = process.argv[3];
const [, , method, endPoint, ...args] = process.argv;

console.log(`Method:  ${method}`);
console.log(`endPoint:  ${endPoint}`);
console.log(args);

//como saber si el metodo es GET, POST, PUT, DELETE
switch (method) {
  case "GET":
    console.log("GET");
    break;
}
//otra forma con if
if (method === "GET" && endPoint === "products") {
  //realizo un fetch
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
}

//si tengo products/7 y tengo que separarlo
const partes = endPoint.split("/");
//const recurso = partes[0];
//const id = partes[1];
const [recurso, id] = partes; //usando destructuring

//como saber si me esta pidiendo todos los productos(products) o uno solo(productos/7)
//si escribo products y no le coloco /7 me retorna undefined
console.log(endPoint.startsWith("products/")); //si comienza con
console.log(endPoint.includes("products/")); //si contiene

//metoo POST
const product = { title: "New Product", price: 29.99 };
fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(product),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
