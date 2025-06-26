import { useReducer, useRef, useCallback, useState, useEffect } from "react";

const initialState = { products: [] };

const init = () => {
    const stored = localStorage.getItem('inventario');
    return stored ? JSON.parse(stored) : initialState;
};



function reducer(state, action) {
    switch (action.type) {
        case "add":
            return {
                products: [...state.products, {
                    id: Date.now(),
                    name: action.name,
                    quantity: 1
                }]
            };
        case "increment":
            return {
                products: state.products.map(p =>
                    p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
                )
            };
        case "decrement":
            return {
                products: state.products.map(p =>
                    p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
                )
            };
        case "remove":
            return {
                products: state.products.filter(p => p.id !== action.id)
            };
        default:
            return state;
        case "clear":
            return { products: [] };

    }
}

function InventoryManager() {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const inputRef = useRef(null);
    const [busqueda, setBusqueda] = useState('');
    const vaciarInventario = () => {
    dispatch({ type: "clear" });
};
    useEffect(() => {
        localStorage.setItem('inventario', JSON.stringify(state));
    }, [state]);

    const handleAddProduct = () => {
        if (inputRef.current.value.trim() !== "") {
            dispatch({ type: "add", name: inputRef.current.value });
            inputRef.current.value = ""; // Limpiar input
        }
    };
    const handleIncrement = useCallback((id) => {
        dispatch({ type: "increment", id });
    }, []);

    const handleDecrement = useCallback((id) => {
        dispatch({ type: "decrement", id });
    }, []);

    const handleRemove = useCallback((id) => {
        dispatch({ type: "remove", id });
    }, []);


    const productosFiltrados = state.products.filter(product =>
        product.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    return (
        <div>
            <h2>Gestor de Inventario</h2>
            <input ref={inputRef} type="text" placeholder="Nombre del producto" />
            <button onClick={handleAddProduct}>Agregar Producto</button>
            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                style={{ marginTop: '1rem' }}
            />
            <button onClick={vaciarInventario} style={{ marginTop: '1rem', marginLeft: '1rem' }}>
  Vaciar Inventario
</button>
            <ul>
                {productosFiltrados.map((product) => (
                    <li key={product.id}>
                        {product.name} - Cantidad: {product.quantity}
                        <button onClick={() => handleIncrement(product.id)}>+</button>
                        <button onClick={() => handleDecrement(product.id)}>-</button>
                        <button onClick={() => handleRemove(product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            {productosFiltrados.length === 0 && (
                <p>No se encontraron productos.</p>
            )}
        </div>
    );
}

export default InventoryManager