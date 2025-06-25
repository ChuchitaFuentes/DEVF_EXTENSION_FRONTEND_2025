import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacto from './pages/Contacto.jsx';
import Usuario from './pages/Usuario.jsx';
import Navegacion from './pages/Navegacion.jsx';

function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contacto">Contacto</Link> |{' '}
        <Link to="/usuario/123">Usuario 123</Link> |{' '}
        <Link to="/navegacion">useNavigate</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/usuario/:id" element={<Usuario />} />
        <Route path="/navegacion" element={<Navegacion />} />
      </Routes>
    </div>
  );
}
export default App;