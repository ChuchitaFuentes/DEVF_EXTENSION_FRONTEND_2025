// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';


function App() {
  //  ESTADOS
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("Listo para despegar");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  //  useEffect al montar (solo se ejecuta una vez)
  useEffect(() => {
     console.log("¡El panel de control está listo!");

    const vuelo = setInterval(() => {
    setCombustible(prev => {
      const nuevo = prev - 10;

      if (nuevo <= 0) {
        clearInterval(vuelo);
        setEstadoNave("Sin combustible");
        return 0;
      }

      setDistancia(dist => dist + 100);
      return nuevo;
    });
    }, 1000);

    return () => {
      clearInterval(vuelo);
      console.log("El panel se ha apagado.");
    };
  }, []);

  // useEffect cuando cambia el combustible
  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  //  useMemo para mostrar estado de la nave
  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

   // Función para aterrizar
   const aterrizar = () => {
    setEstadoNave("Aterrizando");
    const nuevoPlaneta = `Planeta ${planetasVisitados.length + 1}`;
    setPlanetasVisitados(prev => [...prev, nuevoPlaneta]);
  };
  // Renderizado
  return (
    <div style={{ padding: '1rem' }}>
      <h1> Panel de control</h1>
      <p>Distancia: {distancia} km</p>
      <p> Combustible: {combustible}%</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar} style={{ marginBottom: '1rem' }}>
         Aterrizar
      </button>

      <h2> Planetas visitados:</h2>
      {planetasVisitados.length === 0 ? (
        <p>Aún no se ha visitado ningún planeta.</p>
      ) : (
        planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))
      )}
    </div>
  );
}

export default App;