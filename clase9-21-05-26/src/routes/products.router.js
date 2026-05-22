import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

const products = [
  { id: 1, name: "Mouse", price: 18500 },
  { id: 2, name: "Teclado", price: 25000 },
  { id: 3, name: "Monitor", price: 80000 },
];

//obtener los productos
router.get("/", getProducts);

//obtener un producto por id
router.get("/:id", getProductById);

//crear un producto
router.post("/", createProduct);
//el cuerpo del post debe ser:
/*{
  "name": "producto 2",
  "price": 100
} */

//eliminar un producto
router.delete("/:id", deleteProduct);

export default router;
