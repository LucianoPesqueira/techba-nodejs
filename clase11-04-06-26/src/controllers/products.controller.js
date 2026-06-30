const products = [
  { id: 1, name: "Mouse", price: 18500 },
  { id: 2, name: "Teclado", price: 25000 },
  { id: 3, name: "Monitor", price: 80000 },
];

export const getProducts = (req, res) => {
  res.json(products);
};

export const getProductById = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }
  res.json(product);
};

export const createProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Faltan datos obligatorios",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

//editar un producto con put:
export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const { name, price } = req.body;

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  products[productIndex] = {
    id,
    name,
    price,
  };

  res.json(products[productIndex]);
};

export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "producto no encontrado",
    });
  }

  products.splice(productIndex, 1);

  res.json({
    message: "Producto eliminado correctamente",
    product: productIndex[0],
  });
};
