// console.log("inicio");

// setTimeout(() => {
//   console.log("despues");
// }, 2000);

// console.log("fin");
//inicio -> fin -> (2seg) despues

//---------------------------------
function cocinar(callback) {
  setTimeout(() => {
    console.log("Pizza lista");
    callback();
  }, 2000);
}

cocinar(() => {
  console.log("Servir mesa");
});

//---------------------------------
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

function despedirse() {
  console.log("Chau!");
}

saludar("Fede", despedirse);
//---------------------------------
//ejemplo con 2 callbacks
function mensaje(nombre, callbackSaludo, callbackDespedida) {
  callbackSaludo(nombre);
  callbackDespedida();
}

function saludo(nombre) {
  console.log(`Hola ${nombre}, Bienvenido`);
}

function despedida() {
  console.log("Chau!!!");
}

//mensaje("Luciano", saludo, despedida);

//---------------------------------
//promesas
function cocinar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pizza lista");
    }, 2000);
  });
}

//console.log(cocinar()); //Promise { <pending> }
cocinar()
  .then((response) => console.log(response)) //then: se ejecuta cuando la promesa se resuelve
  .catch((error) => console.log(error)) //catch: se ejecuta cuando la promesa se rechaza
  .finally(() => console.log("A comer")); //finally: se ejecuta siempre, haya sido resuelta o rechazada la promesa

//-------------------
//async/await
async function ejecutar() {
  try {
    const response = await cocinar(); //await como si fuera then

    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("A comer");
  }
}

ejecutar();

//-------------------
//fetch
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error));

//otra forma de usar fetch
async function personajes() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
