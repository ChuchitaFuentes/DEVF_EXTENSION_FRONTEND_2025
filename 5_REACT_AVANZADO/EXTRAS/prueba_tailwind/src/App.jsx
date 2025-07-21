import { useState } from 'react'



function App() {


  return (
   
    <>
      <h1 className='text-center font-bold mb-4 text-5xl'>Curso Tailwind 4.0</h1> 
      <h2 className='text-center font-bold mb-10 text-4xl'>Container Queries</h2>
      

      <div className='@container border-2 border-red-500 p-4 resize overflow-hidden'> {/* Overflow, te dice que hacer con el contenido y el resize sirve para poder cambiar de tamaño */}
        <div className='flex flex-col gap-2 @sm:flex-row'> {/* para cambiar el tamaño con respecto a el contenedor @container */}
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </div>
      </div>
    </>
  )
}

export default App
