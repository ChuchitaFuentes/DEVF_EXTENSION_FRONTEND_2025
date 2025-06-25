import { useParams } from 'react-router-dom';

export default function Usuario() {
  const { id } = useParams();

  return (
    <div>
      <h1>Perfil de usuario</h1>
      <p>ID de usuario: {id}</p>
    </div>
  );
}

/* Se usa par USEPARAMS */