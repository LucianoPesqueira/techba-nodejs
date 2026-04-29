

//Objetos
//crear un objeto: llave-valor, un objeto literal
const usuario = {
    nombre : 'Juan',
    apellido : "Perez",
    edad : 33,
    admin : true,
    roles : ["editor", "vendedor"],
    direccion : {
        calle : "Av. San Juan",
        numero : 123
    }
};

//cambiar el valor del nombre
usuario.nombre = "Pablo";
//agregar una propiedad
usuario.email = "juan@example.com";

console.log(usuario.nombre);



//array
const productos = [
    { nombre : "Mouse", precio : 100},
    { nombre : "Teclado", precio : 150},
    { nombre : "Monitor", precio : 500}
];

//forEach - Recorrer
//const nuevoArray = productos.map((p) => p.precio = p.precio * 1.21);

//map - recorre el array y devuelve un nuevo array sin modificar el original
const nuevoArray = productos.map((p) => {
    return {
        nombre: p.nombre,
        precio: p.precio * 1.21
    }
});

nuevoArray.push({ nombre : "Monitor LG", precio : 350});

console.log(nuevoArray, productos);


//filter - filtrar
console.log("Filter");

const productos2 = [
    { id : 1, nombre : "Mouse", precio : 100, categoria : "perifericos"},
    { id : 2, nombre : "Teclado", precio : 150, categoria : "perifericos"},
    { id : 3, nombre : "Monitor", precio : 500, categoria : "pantallas"},
    { id : 4, nombre : "Monitor LG", precio : 650, categoria : "pantallas"}
];

const filtrados = productos2.filter((p) => p.categoria === "perifericos" && p.precio < 150);

console.log(filtrados);

//forEach

productos2.forEach(p => console.log(`El producto ${p.nombre} valor $${p.precio}`));


//objeto con funcion imprimir indicandole con this(haciendo referencia al objeto actual)
const usuario2 = {
    nombre : "Maria",
    apellido : "Garcia",
    imprimir : function () {
        return `${this.nombre} ${this.apellido}`
    },
};

console.log(usuario2.imprimir());


//clases
console.log("---------------------------------Clases------------------------");

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.admin = false;
    }
    imprimir() {
        return `Usuario: ${this.nombre} - EstadoAdmin: ${this.admin}`;
    }
}

const user1 = new Usuario('Juan');
console.log(user1);
console.log(user1.imprimir());

const user2 = new Usuario('Maria');
console.log(user2);


const user = {
    nombre : "Juan",
    edad : 30,
};

let nombre2 = user.nombre;
nombre2 = "Juan Pablo";

console.log(nombre2, user.nombre);


//desestructuracion de objetos
const {nombre, edad} = user

console.log(nombre, edad);

const nombres = ["Juan", "Maria", "Pedro", "Florencia", "Martina"];

const [, n1, ,n3] = nombres;

console.log(n1, n3);


//spread operator
const user3 = { nombre : "Juan", edad : 33};

const adminUser = { ...user3, edad : user.edad, admin : true};

const adminUserSpread = { ...user3, admin : true};

console.log(user3, adminUser);

console.log(user3, adminUserSpread);

//otro ejemplo
const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

const numbersC = [...numbersA, ...numbersB];

console.log(numbersC);


const productosConIVA = productos.map((p) => {
    return {
        ...p,
        precio : p.precio * 1.21,
    }
});

console.log(productos, productosConIVA)