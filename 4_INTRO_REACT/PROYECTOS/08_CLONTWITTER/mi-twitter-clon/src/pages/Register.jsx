import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("El nombre de usuario es obligatorio");
      return;
    }

    // Obtener usuarios registrados
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Verificar si el usuario ya existe
    if (users.find((u) => u.username === username)) {
      setError("El nombre de usuario ya existe");
      return;
    }

    // Guardar nuevo usuario
    users.push({ username });
    localStorage.setItem("users", JSON.stringify(users));

    // Redirigir a login
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }}
        name="username"
        id="username"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
