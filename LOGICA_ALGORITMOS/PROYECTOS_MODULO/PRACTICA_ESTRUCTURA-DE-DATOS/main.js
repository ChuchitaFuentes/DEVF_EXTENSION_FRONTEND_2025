//Hacer una lista de compras
// CONSIDERACIONES:
// -Funcion de agregar al final sin que estos se puedan repetir.
// -Funcion de eliminar.
// -Funcion de mostrar lista.
let listaProductos = new Map();
class Producto{
    constructor (nombre, cantidad, categoria, unidad, tiendaAdquisicion){
        this._nombre =  nombre;
        this._cantidad = cantidad;
        this._unidad = unidad;
        this._categoria = categoria;
        this._tiendaAdquisicion = tiendaAdquisicion;
        this._fechaAgrego = this.fechahoy();
    }

    mostrarInfo(){
        return `Producto: ${this._nombre} | Cantidad: ${this._cantidad}  | Unidad: ${this._unidad} | Categoría: ${this._categoria} | Voy a comprar en: ${this._tiendaAdquisicion} | Fecha en que se agregó: ${this._fechaAgrego}`
    }
    
    agregarProducto(){
        if (!listaProductos.has(this._nombre)) {
        // Si no existe, lo agregamos a la lista de compras
        listaProductos.set(this._nombre, this);
        console.log(`${this._nombre} agregado a la lista.`);
      } else {
        console.log(`${this._nombre} ya está en la lista.`);
      }
    }

    fechahoy(){
        let obtenerDatos =new Date();
        let fecha = obtenerDatos.toLocaleDateString();
        let hora = obtenerDatos.toLocaleTimeString();
        return `${fecha} ${hora}`;
    }

}

function imprimirProductos(){
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
let producto1 = new Producto("Leche", 2, "Lácteos", "Piezas", "Supermercado A");
let producto2 = new Producto("Manzana", 1, "Frutas", "kg", "Supermercado B");
let producto3 = new Producto("Pan", 1, "Pan/Pastas", "Paquete", "Supermercado C");


producto1.agregarProducto();  
producto2.agregarProducto();  
producto3.agregarProducto();


imprimirProductos();

eliminarProducto("Manzana");

imprimirProductos();