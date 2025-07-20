import { useState } from 'react'



function App() {
 

  return (
    <>
      <div className='p-6 flex flex-col gap-3'>
      <p className='bg-dark-font text-blue-50'>Tailwind 4.1 </p> {/* Se pone en esta linea un color personalizado */}
      <p className='bg-red-500'>Background</p>
      <p className='text-blue-500'>Text</p>
      <p className='decoration-sky-500 underline'>Subrayado</p>
      <p className='border-2 border-green-500'>Border</p>
      <p className='shadow-sm shadow-red-500'>Shadow</p>
      <p className='inset-shadow-sm inset-shadow-indigo-500'>Inset shadow</p>
      <label>
        <input className="accent-green-500" type="checkbox" checked />
        Accent
      </label>
      <textarea className='caret-red-700'></textarea>
      </div>
    </>
  )
}

export default App
