import { Link } from 'react-router-dom';

const citas = [
  { id: 1, paciente: "Juan Pérez" },
  { id: 2, paciente: "Ana Gómez" },
];

function Citas() {
  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>{cita.paciente}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;