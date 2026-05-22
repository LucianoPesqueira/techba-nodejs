import express from "express";
import productsRouter from "./src/routes/products.router.js";
import userRouter from "./src/routes/users.router.js";

//creo una instancia de express
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
  <h1>APi de productos</h1>
  <p>Servidor funcionando correctamente</p>
  `);
});

//le indico que use el productsRouter para las rutas que comiencen con /products
app.use("/api/products", productsRouter);
app.use(userRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
