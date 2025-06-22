import { useState } from 'react'

export const UserCard = ({ user }) => {
    const [isContacted, setIsContacted] = useState(false);
    const [address, setAddress] = useState({street: 'Calle Falsa', number:123})
    //Desestruturacion del objeto
    const { id, firstName, email, image } = user;

    /* Este es un manejador de eventos del boton de cada tarjeta */
    const handleClick = (name) => {
        setAddress({...address, street: 'Nueva calle', number :456})
    }

     //console.log(address); se comenta momentaneamente

    return (
        <div className='card'>
            <img className='image' src={image} alt={firstName} />
            <h2 className='firstName'>{firstName}</h2>
            <p className='email'>{email}</p>
            <button className='button' onClick={() => handleClick()}>
                {
                    isContacted ? 'Contactado' : 'Contactar'
                }
            </button>
        </div>
    )
}
