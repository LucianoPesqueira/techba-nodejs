import express from "express";
import moviesRouter from "./routes/movies.router.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "¡Hola, mundo!" });
});

app.use("/api/movies", moviesRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
