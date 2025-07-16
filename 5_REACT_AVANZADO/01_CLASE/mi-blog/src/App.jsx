
import { UserProvider } from '../context/UserContext'
import ContenidoPrivado from './components/ContenidoPrivado'
import Header from './components/Header'
import Loging from './components/Login'
import './App.css'

function App() {


  return (
    <UserProvider>
      <Header />
      <Loging />
      <ContenidoPrivado />
    </UserProvider>
  )
}

export default App
