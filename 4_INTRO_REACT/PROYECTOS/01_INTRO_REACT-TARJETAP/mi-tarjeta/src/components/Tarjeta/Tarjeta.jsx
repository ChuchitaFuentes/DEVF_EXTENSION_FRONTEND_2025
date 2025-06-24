function Tarjeta() {
  // Definimos la información estática de la tarjeta
  const nombre = "Ana Pérez";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  // Retornamos el JSX que representa la tarjeta
  return (
    <div className="tarjeta">
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;