//http: modulo nativo de node
const http = require("http");

//creo un servidor
//request: peticion del usuario, response: respuesta
const server = http.createServer((request, response) => {
  // / GET -> url
  // /favicon.ico GET -> method
  console.log(request.url, request.method);
  response.end("Hola Mundo");
});

//servidor escucha en el puerto 3000
server.listen(3000, () => console.log("http://localhost:3000"));

//si voy en el navegador a: http://localhost:3000/
//me mostrara el mensaje Hola Mundo
