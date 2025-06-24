import Tarjeta from './components/Tarjeta/Tarjeta';
import { Header } from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta />
    </div>
  );
}

export default App;
