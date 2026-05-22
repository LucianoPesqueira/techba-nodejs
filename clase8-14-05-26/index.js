import express from "express";

//creo una instancia de express
const app = express();

const products = [
  { id: 1, name: "Producto1", price: 10 },
  { id: 2, name: "Producto2", price: 14 },
  { id: 3, name: "Producto3", price: 8 },
];

//es importante donde se ubica el middleware
//viene la peticion y pasa por diferentes lugares, como puntos de control
app.use((req, res, next) => {
  console.log(req.method, req.url); //imprimo en pantalla la ruta que solicito
  //paso por el middleware y sigo, con next
  next();
});

app.get("/", (req, res) => {
  res.send("Hola Mundo!!");
});

//muestro un array de productos
app.get("/products", (req, res) => {
  res.send(products);
});

//de products captura el id ingresado
app.get("/products/:id", (req, res) => {
  res.send(`Producto ${req.params.id}`);
});

//middleware
//controlo que no llege a la respuesta predet, sino a la que yo declaro
app.use((req, res, next) => {
  res.send("Not Found");
});

app.listen(3000, () => console.log("http://localhost:3000"));

//tiene respuesta automatica: por default(404)
//Cannot GET /
