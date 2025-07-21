import { useState } from 'react'



function App() {


  return (
   
    <>
      <h1 className='text-center font-bold mb-4 text-5xl'>Curso Tailwind 4.1</h1> 
      <h2 className='text-center font-bold mb-10 text-4xl'>Pseudo clases</h2>
       <button className='bg-blue-800 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-300 cursor-pointer focus:outline-2 focus:outline-red-400 active:bg-amber-400 mb-4'>Aceptar</button>
       <div className='mb-4'>
        <a href="https://www.google.com" className="visited:text-green-500" target="_blank">Google</a>
        <a href="https://www.github.com" className="visited:text-green-500" target="_blank">Github</a>
        <a href="https://www.youtube.com" className="visited:text-green-500" target="_blank">Youtube</a>
       </div>
       <ul className='mb-4'>
        <li className="first:bg-amber-300 last:bg-red-500 only:bg-blue-300">HTML</li>
        <li className="first:bg-amber-300 last:bg-red-500 only:bg-blue-300">CSS</li>
        <li className="first:bg-amber-300 last:bg-red-500 only:bg-blue-300">Tailwind</li>
       </ul>
       <input type="text" placeholder='Nombre:' className='disabled:bg-gray-300 required:border-red-500' />
    </>
  )
}

export default App
