import db from "../config/firebase.js";

import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const productsSeeder = [
  {
    title: "Auriculares JBL Tune 510BT",
    description:
      "Auriculares inalámbricos con sonido potente y graves profundos. Con hasta 40 horas de reproducción",
    price: 10.99,
    stock: 100,
  },
  {
    title: "Parlante Bluetooth Sony SRS-XB12",
    description:
      "Parlante Bluetooth con sonido potente y graves profundos. Con hasta 40 horas de reproducción",
    price: 98.99,
    stock: 50,
  },
  {
    title: "Altavoz Portátil JBL Charge 5",
    description:
      "Altavoz portátil con sonido potente y graves profundos. Con hasta 40 horas de reproducción",
    price: 55.99,
    stock: 25,
  },
];

//addDoc: agrega un nuevo documento a una colección en Firestore.
// Toma como argumentos la referencia a la colección y los datos del documento a agregar.
// Devuelve una promesa que se resuelve con la referencia al nuevo documento creado.
const createProducts = () => {
  productsSeeder.forEach(async (product) => {
    await addDoc(productsCollection, product);
  });
};

createProducts();

//para probarlo ejecuto: node src/seeders/productos.seeder.js
