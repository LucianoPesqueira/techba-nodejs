export const createCategory = (req, res) => {
  const { title } = req.body;

  res.status(201).json({
    message: `Categoria creada ${title}`,
  });
};

export const getCategories = (req, res) => {
  res.json({
    message: "Listado de categorias",
  });
};

export const getCategoriesById = (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Categoria con ID ${id}`,
  });
};

export const updateCategory = (req, res) => {
  const { id } = req.params;
  //ej si tengo 1 id
  if (id != 1) {
    return res.status(404).json({ error: "Categoria no encontrada" });
  }
  const { title } = req.body;

  //ej si tengo 1 id
  if (!title) {
    return res.status(422).json({ error: "El titulo es requerido" });
  }
  res.json({ message: `Se actualizo el ${title} del ID ${id}` });
};

// createAt(establece 1 vez la fecha en que se creo), updateAt(fecha de cada vez que actualizo), deleteAt = null -> fecha de eliminacion logica

export const deleteCategory = (req, res) => {
  const { id } = req.params;

  //ej si tengo 1 id
  if (id != 1) {
    return res.status(404).json({ error: "Categoria no encontrada" });
  }

  res.json({
    message: `Se elimino la categoria con el ID ${id}`,
  });
};
