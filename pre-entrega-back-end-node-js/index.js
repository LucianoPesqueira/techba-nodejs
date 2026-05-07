//capturar los comandos ingresados por terminal
const [, , method, endPoint, ...args] = process.argv;

//---- validaciones ----
//validar si method es mayuscula o no -> convertirlo con toUpperCase()
const method_upper = method.toUpperCase();

//aplico destructuring en los args
const [title, price, category] = args;

//comprobar como recibo el endPoint si es products/1 o products, separarlo
const [recurso, id] = endPoint.split("/");

switch (method_upper) {
  case "GET":
    if (recurso === "products") {
      if (id === undefined) {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => console.log(data));
      } else if (id && id.trim() !== "" && !Number.isInteger(Number(id))) {
        console.log("El id debe ser un numero entero valido");
      } else {
        const numId = Number(id);

        fetch(`https://fakestoreapi.com/products/${numId}`)
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) =>
            console.log("Error al conectar con la API:", err.message),
          );
      }
    } else {
      console.log("Recurso no encontrado");
    }
    break;

  case "POST":
    if (recurso === "products") {
      if (args.length < 3) {
        console.log("Debe tener 3 argumentos: nombre precio categoria");
      } else if (isNaN(Number(price))) {
        console.log("El precio debe ser un numero valido");
      } else {
        const product = { title, price: Number(price), category };
        fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) =>
            console.log("Error al conectar con la api", err.message),
          );
      }
    }
    break;

  case "DELETE":
    if (recurso === "products") {
      if (id === undefined) {
        console.log("Debe ingresar el id del producto a eliminar");
      } else if (id && id.trim() !== "" && !Number.isInteger(Number(id))) {
        console.log("El id debe ser un numero entero valido");
      } else {
        const numId = Number(id);

        fetch(`https://fakestoreapi.com/products/${numId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) =>
            console.log("Error al conectar con la api", err.message),
          );
      }
    } else {
      console.log("Recurso no encontrado");
    }
    break;

  default:
    console.log("Error");
}
