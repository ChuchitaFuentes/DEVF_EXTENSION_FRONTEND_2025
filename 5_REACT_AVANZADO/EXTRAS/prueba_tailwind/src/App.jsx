import { useState } from 'react'



function App() {


  return (
    <div className='p-10'>
      <div className='grid grid-cols-6 gap-2 grid-rows-8'>
        <div className="box col-span-4 col-start-2">01</div>
        <div className="box col-start-1 col-end-3">02</div>
        <div className="box col-span-2 col-end-7">03</div>
        <div className="box col-start-1 col-end-7">04</div>
        <div className="box col-span-full row-start-5">05</div>
        
        
      </div>
    </div>
  )
}

export default App
