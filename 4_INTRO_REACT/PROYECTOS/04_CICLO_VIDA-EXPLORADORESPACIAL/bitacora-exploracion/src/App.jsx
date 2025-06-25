import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Stack,
} from '@mui/material';

function App() {
  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem('planetas')) || []
  );
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const inputImagenRef = useRef(null);
  const [editando, setEditando] = useState(false);
  const [indiceEditado, setIndiceEditado] = useState(null);

  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas));
  }, [planetas]);

  const handleSubmit = (e) => {
  e.preventDefault();

  const nuevoPlaneta = {
    nombre,
    descripcion,
    imagen: imagen ? URL.createObjectURL(imagen) : null,
  };

  if (editando) {
    const copia = [...planetas];
    copia[indiceEditado] = nuevoPlaneta;
    setPlanetas(copia);
    setEditando(false);
    setIndiceEditado(null);
  } else {
    setPlanetas([...planetas, nuevoPlaneta]);
  }

  setNombre('');
  setDescripcion('');
  setImagen(null);
  if (inputImagenRef.current) {
    inputImagenRef.current.value = '';
  }
};

const handleEdit = (index) => {
  const planeta = planetas[index];
  setNombre(planeta.nombre);
  setDescripcion(planeta.descripcion);
  setImagen(null); // Imagen nueva solo si el usuario la cambia
  setEditando(true);
  setIndiceEditado(index);
};

  const handleDelete = (index) => {
    const nuevosPlanetas = [...planetas];
    nuevosPlanetas.splice(index, 1);
    setPlanetas(nuevosPlanetas);
  };

  return (
    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant="h3" gutterBottom align ="center">Bitácora de Exploración</Typography>

      <form onSubmit={handleSubmit} style = {{marginBottom: '2rem'}}>
        <Stack spacing={2}>
          <TextField
            label="Nombre del planeta"
            variant="outlined"
            fullWidth
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            label="Descripción"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            required
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <input
            type="file"
            ref={inputImagenRef}
            onChange={(e) => setImagen(e.target.files[0])}
          />
          <Button type="submit" variant="contained" color="primary">
            {editando ? 'Actualizar' : 'Guardar'}
          </Button>
        </Stack>
         </form>

         <Typography variant="h5" gutterBottom>
        Planetas Registrados
      </Typography>
      <Stack spacing={2}>
        {planetas.map((planeta, index) => (
          <Card key={index}>
            {planeta.imagen && (
              <CardMedia
                component="img"
                height="180"
                image={planeta.imagen}
                alt={planeta.nombre}
              />
            )}
            <CardContent>
              <Typography variant="h6">{planeta.nombre}</Typography>
              <Typography variant="body2">{planeta.descripcion}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleEdit(index)} color="warning">
                Editar
              </Button>
              <Button onClick={() => handleDelete(index)} color="error">
                Eliminar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default App;