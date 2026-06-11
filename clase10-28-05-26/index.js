import express from "express";
import productsRouter from "./src/routes/products.router.js";
import userRouter from "./src/routes/users.router.js";
import cors from "cors"; //importo cors

//creo una instancia de express
const app = express();
const PORT = 3000;

//este middleware, le indica a express que todas las peticiones que lleguen con formato json,
// las convierta a un objeto de javascript, para poder manipularlo
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send(`
  <h1>APi de productos</h1>
  <p>Servidor funcionando correctamente</p>
  `);
});

//clase 11
//para capturar mas de 1 valor: "/prueba/:uid/category/:catId"
app.get("/prueba/:uid", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.send("Prueba" + id);
});

app.get("/query/params", (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  res.send(`Query params: ${id}`);
  //http://localhost:3000/query/params?id=123&catId=45&prodId=2026
});
//-------

//le indico que use el productsRouter para las rutas que comiencen con /products
app.use("/api/products", productsRouter);
app.use(userRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

//para capturar el error, antes de que express tome el control y retorne el html
app.use((req, res) => {
  res.status(400).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
