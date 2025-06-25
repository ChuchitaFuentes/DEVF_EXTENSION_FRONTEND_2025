import { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
    const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio());
    const [numeroIngresado, setNumeroIngresado] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [acertado, setAcertado] = useState(false);

    function generarNumeroAleatorio() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const verificarNumero = () => {
        const numero = Number(numeroIngresado);

        if (numero === numeroSecreto) {
            setMensaje('¡Acertaste!');
            setAcertado(true);
        } else if (numero < numeroSecreto) {
            setMensaje('El número es mayor');
        } else {
            setMensaje('El numero es menor');
        }
        setNumeroIngresado('');
    }
    const reiniciarJuego = () => {
  setNumeroSecreto(generarNumeroAleatorio());
  setNumeroIngresado('');
  setMensaje('');
  setAcertado(false);
};


     return (

    <div>
      <h1> Adivina el Número</h1>

      <InputNumber
        valor={numeroIngresado}
        actualizarNumero={setNumeroIngresado}
      />

      <button onClick={verificarNumero}>Probar</button>

      <Message texto={mensaje} />

      {acertado && <RestartButton onClick={reiniciarJuego} />}
    </div>
    
  );

};

export default Game