const products = [
  { id: 1, name: "Mouse", price: 12000 },
  { id: 2, name: "Teclado", price: 25000 },
  { id: 3, name: "Monitor", price: 150000 },
];

import {
  getProducts as getProductsModel,
  getProductById as getProductsByIdModel,
  createProduct as createProductModel,
  updateProduct as updateProductModel,
  deleteProduct as deleteProductModel,
} from "../models/Product.js";

export const getProducts = async (req, res) => {
  const products = await getProductsModel();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  // const { id } = req.params;

  //const product = products.find((product) => product.id === id);
  const product = await getProductsByIdModel(id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  if (stock <= 0) {
    return res.status(422).json({
      message: "El stock debe ser un número positivo",
    });
  }

  const newProduct = await createProductModel({ name, price, stock });

  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const updatedProduct = await updateProductModel(id, { name, price, stock });

  if (!updatedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await deleteProductModel(id);

  if (!deletedProduct) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json({
    message: "Producto eliminado correctamente",
    product: deletedProduct,
  });
};
