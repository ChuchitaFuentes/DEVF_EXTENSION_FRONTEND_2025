import { useEffect } from "react";
import { useState } from "react";
import '../components/ArticulosBlog.css'


export default function ArticulosBlog ()  {
    const [characters, setCharacters] = useState([]); /* los corchetes se ponen para señalar que es un arreglo */
    const [isLoading, setIsLoading] = useState(true); /*se pone como boolean porque su estado inicial te dice si esta cargando o no, y es true porque sino no comenzaria */
    const [error, setError] = useState (null); /* Porque no hay errores en un inicio */

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character?page=2') /* Se modifica page=2 para cambiar la pagina */
            .then (res => {
                if (!res.ok) throw new Error('Error al obtener los artículos')
                return res.json(); /* que en cuanto lo lea lo tranforme en un formato json lo que abajo se usa como data*/
            })
            .then(data => setCharacters(data.results))
            .catch(err => setError(err))
            .finally(()=>setIsLoading(false))
    }, []);

    if (isLoading) return <h1>Cargando personajes...</h1>
    if (error) return <h1>Error: {error}</h1>

    return (
    <div className="articulos">
        <h2>Personakes de Rick and Morty</h2>
        {characters.map(character => (
            <div className="card"key={character.id}>
                <h3>{character.name}</h3> 
                <p>{character.species}</p>
                <img src={character.image} alt="" />
            </div>
        ))}
    </div>
  )
}

