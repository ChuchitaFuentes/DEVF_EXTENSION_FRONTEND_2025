//FUNCION REDUCE, esta reduce los elementos de un arreglo y no solo funciona con números
const letras = ["H", "O", "L", "A"];

//Uso del reduce
let palabra = letras.reduce(
  (concatenacion, letra) => concatenacion + letra,
  "¡"
);
console.log(palabra);

//Uso de una concatenacion básica
console.log(letras[0] + letras[1] + letras[2] + letras[3]);

//Uso de un ciclo for
let palabraFor = [];
for (let i = 0; i < letras.length; i++) {
  palabraFor += letras[i];
}
console.log(palabraFor);

//FUNCION EVERY, este comprueba si todos los elementos de un arreglo cumplen con una funcion

const tareas = [
  {
    nombre: "Lavar trastes",
    pendiente: false,
  },
  {
    nombre: "Barrer",
    pendiente: true,
  },
  {
    nombre: "Trapear",
    pendiente: false,
  },
  {
    nombre: "Estudiar",
    pendiente: false,
  },
];
//USO EVERY
let tareasPendientes = tareas.every((tarea) => tarea.pendiente === true);
console.log(tareasPendientes);

//USO CICLO FOR
let resultado = true;
let elementoActual = tareas[0].pendiente;
for (let i = 0; i < tareas.length; i++) {
  if (elementoActual !== tareas[i].pendiente) {
    resultado = false;
  }
  elementoActual = tareas[i].pendiente;
}

console.log(resultado);

function verificarAtributo(arr, key) {
  let elementoActual = arr[0][key];
  for (let i = 0; i < arr.length; i++) {
    if (elementoActual !== arr[i][key]) {
      return false;
    }
    elementoActual = arr[i][key];
  }
  return true;
}
console.log(verificarAtributo(tareas, "pendiente"));

const productos =[
    {
        nombre: "platano",
        precio:20
    },
    {
        nombre: "platano",
        precio:20
    },
    {
        nombre: "platano",
        precio:20
    },
    {
        nombre: "platano",
        precio:20
    }
]

console.log(verificarAtributo(productos, "platano"))


//FUNCION INCLUDES, esta determina si un arrgelo incluye un determinado elemento, no funciona con objetos, pero si con datos primitivos

const incluyeO = letras.includes("z");
console.log(incluyeO);

//FUNCION SOME, comprueba si al menos un elemento del arreglo cumple con una condicion

const unaTareaCumplida = tareas.some((tarea => tarea.pendiente === true));
console.log(unaTareaCumplida);


//OBJETOS: Es una coleccion de propiedades, con una clave y un valor.

const carritoCompras ={
    productos :[],
    agregarProducto: function(producto){
        this.productos.push(producto);
    },
    eliminarProducto: function(producto){
        let indiceDelProducto = this.productos.indexOf(producto);
        if (indiceDelProducto === -1){
            console.log(`No se encontro ningun producto llamado "${producto}"`);
            return;
        }
        this.productos.splice(indiceDelProducto,1);
    },
    mostrarProductos: function(){
        this.productos.forEach((producto)=> console.log(producto));
    }
}

carritoCompras.agregarProducto("Manzana");
carritoCompras.agregarProducto("Fresas");
carritoCompras.agregarProducto("Kiwi");

carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("PLATANO");

carritoCompras.mostrarProductos();