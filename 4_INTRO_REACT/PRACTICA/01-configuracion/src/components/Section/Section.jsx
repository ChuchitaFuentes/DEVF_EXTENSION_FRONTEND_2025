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
    /* Este es un manejador de eventos del boton de cada tarjeta */
    const handleClick=(name) =>{
        console.log(`Contactando a ${name}`)
    }
  return (
    <section>
        {
            users.map(user=>{
                return(
                    <div className='card'key ={user.id}>
                        <img className='image' src={user.image} alt={user.name} />
                        <h2 className='name'>{user.name}</h2>
                        <p className='description'>{user.description}</p>
                        <button className='button' onClick={()=>handleClick(user.name)}>Contactar</button>
                    </div>
                )
            })
        }
    </section>
  )
}


