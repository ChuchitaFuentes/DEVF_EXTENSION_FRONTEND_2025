import { useState, useEffect } from "react";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from '@mui/material';

const Home = ({ user, logout }) => {
  const [tweets, setTweets] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Evita guardar antes de cargar


  // Cargar tweets desde localStorage al iniciar
  useEffect(() => {
    if (!user) return;

    const storedTweets = localStorage.getItem(`tweets_${user.username}`);
    if (storedTweets) {
      setTweets(JSON.parse(storedTweets));
    }

    setIsLoaded(true); // ✅ Marca como ya cargado
  }, [user]);

  // Guardar tweets solo si ya se cargaron
  useEffect(() => {
    if (!user || !isLoaded) return;
    localStorage.setItem(`tweets_${user.username}`, JSON.stringify(tweets));
  }, [tweets, user, isLoaded]);

  const handleAddTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
      username: user.username,
      date: new Date().toLocaleString()
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleDeleteTweet = (id) => {
    const confirmacion = confirm("¿Estas seguro de querer eliminar este tweet?")
    if (confirmacion) {
      alert("El tweet se ha eliminado correctamente");
      setTweets(tweets.filter(tweet => tweet.id !== id));
    } else {
      alert("Accion cancelada");
    }

  };

  const handleLike = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  if (!user) return <p>Cargando usuario...</p>;

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 3, backgroundColor: '#202020', borderRadius: 2, boxShadow: 3 }}>
      <Button
        component={Link}
        to="/profile"
        variant="outlined"
        sx={{ mb: 2 }}>
        Ver Perfil
      </Button>
      <Button
        onClick={logout}
        variant="outlined"
        sx={{ mb: 2 }}>
        Cerrar sesión
      </Button>
      <Typography variant="h4" gutterBottom>
        Bienvenido a Twitter
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Hola, @{user.username}!
      </Typography>
      <TweetForm onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} onLike={handleLike} onDelete={handleDeleteTweet}/>
    </Box>
  );
};

export default Home;
