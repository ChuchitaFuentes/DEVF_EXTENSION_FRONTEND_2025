import { useState } from "react";
import './ListaCompras.css'

function ListaCompras() {
    // Definir el estado para la lista de compras
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    // Función para agregar un nuevo producto a la lista
    const agregarProducto = () => {
        const productoLimpio = nuevoProducto.trim(); 
        if (productoLimpio === "") return;

        if (productos.includes(productoLimpio)) {
            alert("Ese producto ya está en la lista");
            return;
        }

        setProductos([...productos, nuevoProducto]);
        setNuevoProducto("");

    };

    // Función para eliminar un producto de la lista
    const eliminarProducto = (index) => {
        // Creamos una nueva lista filtrando el índice
        const nuevaLista = productos.filter((_, i) => i !== index);
        setProductos(nuevaLista);
    };

    return (
        <div>
            <h2>Lista de Compras</h2>
            <input
                type="text"
                value={nuevoProducto}
                onChange={(e) => setNuevoProducto(e.target.value)}
            />
            <button onClick={agregarProducto}>Agregar</button>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>
                        {producto}
                        <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCompras;