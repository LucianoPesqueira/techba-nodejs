const args = process.argv.slice(2);
const command = args[0];
const value = args[1];

if (command == "GET") {
  console.log("Toma un dato");
} else if (command == "POST" && value != undefined) {
  console.log(`Recibimos ${value} satisfactoriamente`);
} else if (command == "PUT" && value != undefined) {
  console.log(`Modificamos el item con id: ${value} satisfactoriamente`);
} else if (command == "DELETE" && value != undefined) {
  console.log(`El item con el id: ${value} se eliminó con éxito`);
} else {
  console.log("Comando no valido");
}
