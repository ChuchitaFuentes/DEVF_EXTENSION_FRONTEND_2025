import { useState } from 'react'



function App() {


  return (
    /* Sm y md son puntos de quiebre para manejo del diseño responsivo */
    <>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Curso Tailwind</h1> {/* tamaños predeterminados */}
      <h1 className='font-bold text-2xl min-[650px]:text-3xl min-[800px]:text-4xl'>Curso Tailwind</h1> {/* Tamaños personalizados */}
      <h1 className='sm:max-md:bg-amber-400'>Texto con fondo</h1> {/* Este es un breakpoint con rango */}

      <div className='p-4 grid grid-cols-2 gap-2 tablet:grid-cols-3 desktop:grid-cols-4'>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
      </div>
    </>
  )
}

export default App
