function InputNumber ({valor, actualizarNumero}){
    return (
        <input 
        type="number" 
        value={valor} 
        onChange = {(e) => actualizarNumero(e.target.value)}
        placeholder="Escribe un número del 1 al 100"/>
    );
}

export default InputNumber;