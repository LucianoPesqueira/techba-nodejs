//un modulo de rutas para categorias

import { Router } from "express";

//creo un objeto router
const router = Router();

import {
  createCategory,
  getCategories,
  getCategoriesById,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller.js";

//CRUD - Create, Read, Update, Delete
router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoriesById);
//update: patch(cambio solo una cosa), put(remplaza todo)
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
