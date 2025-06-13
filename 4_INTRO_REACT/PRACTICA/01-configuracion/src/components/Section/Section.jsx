const frutas =['Manzana',  'Pera', 'Naranja']; /* Se simula la peticion a un servidor */
export const Section = () => {
  return (
    <ul>
        {
            frutas.map((fruta)=> <li key ={fruta}>{fruta}</li>)
        }
    </ul>
  )
}

