import { useState } from 'react'
import Game from './components/game';
import './App.css'

function App() {
  const [numero, setNumero] = useState ('');

  return (
    <div>
     <Game></Game>      
    </div>
  )
}

export default App
