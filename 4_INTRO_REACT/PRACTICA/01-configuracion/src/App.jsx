import { Header } from './components/Header/Header' //exportacion señalada
import Footer from './components/Footer/Footer' // exportacion default
import {Section} from './components/Section/Section'
import './App.css'

function App() {
  

  return (
    <>
    <Header title="Mi pagina Web" show={true}/> {/* Se agrega el componente, tiene un prop  */}
    <Section />
    {/* <Footer/> */} {/* se comenta de manera temporal para que no se vea */}
    </>
  )
}

export default App
