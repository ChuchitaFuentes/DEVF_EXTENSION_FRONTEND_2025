import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()){
      setError("El nombre de usuario es obligatorio")
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")|| "[]");
    const userExists = users.find((u) => u.username === username);

    if(!userExists){
      setError("Usuario no encontrado. Por favor registrese o verifique su nombre de usuario.");
      return;
    }
    onLogin(username);
    navigate("/");
  };

  return (
    <>
    <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
          setError("");
        }}
        name="username"
        id="username"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Iniciar sesión</button>
      
    </form>
    </>
  );
};
 export default Login;