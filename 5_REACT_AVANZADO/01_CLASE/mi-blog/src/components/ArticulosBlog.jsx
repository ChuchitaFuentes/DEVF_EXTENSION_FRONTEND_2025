
import { useEffect } from "react";
import { useState } from "react";
import './ArticulosBlog.css'


export default function ArticulosBlog ()  {
    const [recipes,setRecipes] = useState([]); /* los corchetes se ponen para señalar que es un arreglo */
    const [isLoading, setIsLoading] = useState(true); /*se pone como boolean porque su estado inicial te dice si esta cargando o no, y es true porque sino no comenzaria */
    const [error, setError] = useState (null); /* Porque no hay errores en un inicio */
   ;

   

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes?limit=10') /* Se modifica page=2 para cambiar la pagina */
            .then (res => {
                if (!res.ok) throw new Error('Error al obtener los artículos')
                return res.json(); /* que en cuanto lo lea lo tranforme en un formato json lo que abajo se usa como data*/
            })
            .then(data => setRecipes(data.recipes))
            .catch(err => setError(err))
            .finally(()=>setIsLoading(false))
    }, []);

    if (isLoading) return <h1>Cargando recetas...</h1>
    if (error) return <h1>Error: {error}</h1>

    return (
    <div className="articulos">
        <h2>Popular Recipes</h2>
        {recipes.map(recipe => (
            <div className="card"key={recipe.id}>
                <h3>{recipe.name}</h3> 
                <p>{recipe.species}</p>
                <ul>Ingredients:
                {(recipe.ingredients).map(ingredient=>(<li>{ingredient}</li>))}
                </ul>
                <ol>Instructions:
                {(recipe.instructions).map(instruction=>(<li >{instruction}</li>))}
                </ol>
                <h4>{recipe.difficulty}</h4>
            </div>
        ))}
    </div>
  )
}

