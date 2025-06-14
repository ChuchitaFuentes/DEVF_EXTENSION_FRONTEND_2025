import { useState } from 'react'
import userImg from '../../assets/usuario.png'
import './Section.css'
const users =[
    {
        id: 1,
        name: 'Chuchita',
        description: 'Persona chistosa',
        image: userImg
    },
     {
        id: 2,
        name: 'Eli',
        description: 'Persona divertida',
        image: userImg
    },
     {
        id: 3,
        name: 'Tere',
        description: 'Persona amorosa',
        image: userImg
    }
]
export const Section = () => {

    const [count, setCount] = useState(0)

    console.log(count)

    /* Este es un manejador de eventos del boton de cada tarjeta */
    const handleClick=(name) =>{
        setCount(count + 1)
    }
    
  return (
    <section>
        {
            users.map(({id, name, description, image})=>{
                return(
                    <div className='card'key ={id}>
                        <img className='image' src={image} alt={name} />
                        <h2 className='name'>{name}</h2>
                        <p className='description'>{description}</p>
                        <button className='button' onClick={()=>handleClick(name)}>Contactar</button>
                    </div>
                )
            })
        }
    </section>
  )
}


