import { Router } from "express";

const router = Router();

const movies = [
  {
    id: 1,
    title: "Matrix",
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "The Lord of the Ring",
    genre: "Sci-Fi",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
  },
];

//retornar peliculas
router.get("/", (req, res) => {
  res.json(movies);
});

//retornar pelicula por id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: "Pelicula no encontrada" });
  }
});

//editar pelicula
router.put("/:id", (req, res) => {
  res.json({ message: "Pelicula actualizada correctamente!" });
});

//eliminar pelicula
router.delete("/:id", (req, res) => {
  res.json({ message: "Pelicula eliminada correctamente!" });
});

export default router;
