import { useState } from 'react'



function App() {


  return (
   
    <>
      <h1 className='text-center font-bold mb-4 text-5xl'>Curso Tailwind 4.1</h1> 
      <h2 className='text-center font-bold mb-10 text-4xl'>Pseudo elementos</h2>
      <label for="" className='after:content-["*"] after:text-red-600 after:font after:ml-1'>Email:</label>
      <label for="" className='before:content-["*"] before:text-red-600 before:font before:ml-1'>Email:</label>

      <div className='mt-4'>
        <input type="text" className='border placeholder:text-red-500/50' placeholder='Nombre:' />
      </div>
      <input type="file" className='mt-4 file:bg-amber-400 file:border-2 file:rounded-full file:px-1 file:cursor-pointer mb-4'/>
      <ul role="list"className='list-disc ml-2 marker:text-sky-500 p-4 mb-4'>
        <li className="">HTML</li>
        <li className="">CSS</li>
        <li className="">TailWind</li>
      </ul>
      <p className='selection:bg-green-300 selection:text-white first-line:uppercase first-letter:font-bold first-letter:text-7xl first-letter:float-left first-letter:mr-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur nobis dolore necessitatibus magnam nisi, deleniti eius nam obcaecati nihil eum! Adipisci, pariatur alias accusantium debitis voluptatem eos doloribus voluptas!</p>
    </>
  )
}

export default App
