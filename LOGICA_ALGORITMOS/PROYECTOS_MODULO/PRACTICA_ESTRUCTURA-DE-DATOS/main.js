//Hacer una lista de compras
// CONSIDERACIONES:
// -Funcion de agregar al final sin que estos se puedan repetir.
// -Funcion de eliminar.
// -Funcion de mostrar lista.
let listaProductos = new Map();
class Producto {
    constructor(nombre, cantidad, categoria, unidad, tiendaAdquisicion) {
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._unidad = unidad;
        this._categoria = categoria;
        this._tiendaAdquisicion = tiendaAdquisicion;
        this._fechaAgrego = this.fechahoy();
    }

    mostrarInfo() {
        return `Producto: ${this._nombre} | Cantidad: ${this._cantidad}  | Unidad: ${this._unidad} | Categoría: ${this._categoria} | Voy a comprar en: ${this._tiendaAdquisicion} | Fecha en que se agregó: ${this._fechaAgrego}`
    }

    agregarProducto() {
        if (!listaProductos.has(this._nombre)) {
            listaProductos.set(this._nombre, this);
            return true;
        } else {
            return false;
        }
    }


    fechahoy() {
        let obtenerDatos = new Date();
        let fecha = obtenerDatos.toLocaleDateString();
        let hora = obtenerDatos.toLocaleTimeString();
        return `${fecha} ${hora}`;
    }
}

function imprimirProductos() {
    console.log("Lista de productos:");
    console.log([...listaProductos.values()].map(producto => producto.mostrarInfo()));
}
function eliminarProducto(nombreProducto) {
    if (listaProductos.has(nombreProducto)) {
        listaProductos.delete(nombreProducto);
        console.log(`Producto "${nombreProducto}" eliminado de la lista.`);
    } else {
        console.log(`No se encontró el producto "${nombreProducto}".`);
    }
}

//Capturar el DOM del formulario

const formulario = document.getElementById("formulario-producto");
const listaCompras = document.getElementById("lista-compras");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre-producto").value;
    const cantidad = document.getElementById("cantidad-producto").value;
    const categoria = document.getElementById("categoria-producto").value;
    const unidad = document.getElementById("unidad-producto").value;
    const tiendaAdquisicion = document.getElementById("tienda-producto").value;


    let productoLista;
    productoLista = new Producto(nombre, cantidad, categoria, unidad, tiendaAdquisicion);

    if (productoLista.agregarProducto()) {
        // Crear el <li> con el texto y botón eliminar
        const item = document.createElement("li");
        item.textContent = productoLista.mostrarInfo();

        // Crear el botón eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
            eliminarProducto(nombre);
            listaCompras.removeChild(item);
        });
        item.appendChild(botonEliminar);
        listaCompras.appendChild(item);
    } else {
        alert(`El producto "${nombre}" ya está en la lista de compras.`);
    }

    formulario.reset();
})