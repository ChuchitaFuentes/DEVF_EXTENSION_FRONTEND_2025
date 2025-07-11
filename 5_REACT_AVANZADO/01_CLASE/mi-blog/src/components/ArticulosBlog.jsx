import { useEffect } from "react";
import { useState } from "react";
import '../components/ArticulosBlog.css'


export default function ArticulosBlog ()  {
    const [articulos, setArticulos] = useState([]); /* los corchetes se ponen para señalar que es un arreglo */
    const [isLoading, setIsLoading] = useState(true); /*se pone como boolean porque su estado inicial te dice si esta cargando o no, y es true porque sino no comenzaria */
    const [error, setError] = useState (null); /* Porque no hay errores en un inicio */

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then (res => {
                if (!res.ok) throw new Error('Error al obtener los artículos')
                return res.json(); /* que en cuanto lo lea lo tranforme en un formato json lo que abajo se usa como data*/
            })
            .then(data => setArticulos(data))
            .catch(err => setError(err))
            .finally(()=>setIsLoading(false))
    }, []);

    if (isLoading) return <h1>Cargando artículos...</h1>
    if (error) return <h1>Error: {error}</h1>

    return (
    <div className="articulos">
        <h2>Artículos</h2>
        {articulos.map(articulo => (
            <div className="card"key={articulo.id}>
                <h3>{articulo.title}</h3> 
                <p>{articulo.body}</p>
            </div>
        ))}
    </div>
  )
}

