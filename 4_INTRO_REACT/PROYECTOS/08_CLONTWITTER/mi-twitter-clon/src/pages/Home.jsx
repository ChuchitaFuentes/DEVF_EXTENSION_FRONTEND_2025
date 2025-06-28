import { useState, useEffect } from "react";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Bienvenido a Twitter</h1>
      <Link to="/profile">
          <button>Ver Perfil</button>
        </Link>
      <p>Hola, @{user.username}!</p>

      <button onClick={logout}>Cerrar sesión</button>

      <TweetForm onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} onLike={handleLike} onDelete={handleDeleteTweet}/>
    </div>
  );
};

export default Home;
