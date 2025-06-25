import { useNavigate } from 'react-router-dom';

export default function Navegacion() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ejemplo de useNavigate</h1>
      <button onClick={() => navigate('/')}>Ir a Inicio</button>
      <button onClick={() => navigate('/about')}>Ir a About</button>
    </div>
  );
}

/* Se usa para practica USENavigate */