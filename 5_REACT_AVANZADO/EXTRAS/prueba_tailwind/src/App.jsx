import { useState } from 'react'



function App() {
 

  return (
    <>
      {/* Ancho alto  */}
      <div className='bg-amber-600 w-xs'>Medidas - TailWind 4.0</div> {/*Medidas preestablecidas */}
      <div className='bg-sky-600 w-[390px]'>Medidas - TailWind 4.0</div> {/*Medidas personalizadas */}
      <div className='bg-gray-600 size-[390px]'>Medidas - TailWind 4.0</div>{/* Medidas iguales para alto y ancho */}
      <div className='bg-blue-600 h-card'>Medidas - TailWind 4.0</div>{/* Mediddas definidas por varible dentro del css */}
      {/* Tamaño en fracciones dentro de un flex */}
      <div className='flex gap-0.5 p-2'>
        <div className='bg-indigo-400 w-1/3'>Elemento 1</div>
        <div className='bg-indigo-600 w-2/3'>Elemento 2</div>
      </div>
    </>
  )
}

export default App
