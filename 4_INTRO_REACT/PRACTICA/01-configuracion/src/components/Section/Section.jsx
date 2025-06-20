import { useState } from 'react'
import userImg from '../../assets/usuario.png'
import { UserCard } from '../UserCard/UserCard.jsx'
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


  return (
    <section>
        {
            users.map(({id, name, description, image})=>{
                return(
                    <UserCard key = {id} user = {{id, name, description, image}}/>
                )
            })
        }
    </section>
  )
}


