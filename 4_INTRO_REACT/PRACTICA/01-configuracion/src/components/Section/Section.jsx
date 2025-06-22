import { useState , useEffect} from 'react'
import userImg from '../../assets/usuario.png'
import { UserCard } from '../UserCard/UserCard.jsx'
import './Section.css'
// const users =[
//     {
//         id: 1,
//         name: 'Chuchita',
//         description: 'Persona chistosa',
//         image: userImg
//     },
//      {
//         id: 2,
//         name: 'Eli',
//         description: 'Persona divertida',
//         image: userImg
//     },
//      {
//         id: 3,
//         name: 'Tere',
//         description: 'Persona amorosa',
//         image: userImg
//     }
// ]
export const Section = () => {

    const [count, setCount] = useState(1)
    const [likes,setLikes] = useState(0)
    const [user, setUser] = useState([])
    
    useEffect(()=> {
        console.log('useEffect ejecutado');
        const resultado = fetch(`https://dummyjson.com/users/${count}`)
        .then ((res)=>res.json())
        .then (data=>{
            console.log(data)
            setUser(data)})
    }, [count])  

    /* Son los dos manejadores de los botones, es una funcion flecha por lo que se dejan ambos ejemplos */
    const handleClick = () =>{
        setCount(count+1)
    }
    const handleIncreseLikes = () => setLikes (likes + 1);

  return (
    <>
    <h2>{count}</h2>
    <button onClick={handleClick}>Siguiente</button>
    <h2>{likes}</h2>
    <button onClick={handleIncreseLikes}>Like</button>
    <section>
        {
                    <UserCard key = {user.id} user = {user}/>
            
        }
    </section>
    </>
  )
}


