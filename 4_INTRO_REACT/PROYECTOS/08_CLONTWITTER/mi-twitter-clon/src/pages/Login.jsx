import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Typography, TextField, Button, Box } from '@mui/material';
import logo from "../assets/logo.png"
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("El nombre de usuario es obligatorio")
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((u) => u.username === username);

    if (!userExists) {
      setError("Usuario no encontrado. Por favor registrese o verifique su nombre de usuario.");
      return;
    }
    onLogin(username);
    navigate("/");
  };

  return (
    <Box sx={{
      maxWidth: 400,
      mx: 'auto',
      mt: 8,
      p: 4,
      boxShadow: 3,
      borderRadius: 2
    }}>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          width: 200,
          borderRadius: 2,
          mx: 'auto',
        }}
      />
      <Typography variant="h5" gutterBottom align="center">
        Iniciar Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
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

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Iniciar sesión</Button>
      </form>
      <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </Box>
  );
};
export default Login;