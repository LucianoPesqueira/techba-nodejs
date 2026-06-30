import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

const products = [
  { id: 1, name: "Mouse", price: 18500 },
  { id: 2, name: "Teclado", price: 25000 },
  { id: 3, name: "Monitor", price: 80000 },
];

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
