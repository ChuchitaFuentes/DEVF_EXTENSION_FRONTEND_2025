import { useState } from 'react'

export const UserCard = ({ user }) => {
    const [isContacted, setIsContacted] = useState(false);
    const [tecnologies, setTecnologies] = useState(['HTML', 'CSS', 'JS']);
    //Desestruturacion del objeto
    const { id, name, description, image } = user;

    /* Este es un manejador de eventos del boton de cada tarjeta */
    const handleClick = (name) => {
        const newTecnologies = [...tecnologies, 'React'];
        setTecnologies(newTecnologies);
    }

     console.log(tecnologies);

    return (
        <div className='card'>
            <img className='image' src={image} alt={name} />
            <h2 className='name'>{name}</h2>
            <p className='description'>{description}</p>
            <button className='button' onClick={() => handleClick()}>
                {
                    isContacted ? 'Contactado' : 'Contactar'
                }
            </button>
        </div>
    )
}
