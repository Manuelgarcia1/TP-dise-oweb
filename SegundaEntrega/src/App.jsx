import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/navbar/NavbarComponent';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import FormularioContacto from './components/contacto/contacto';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import AddAlojamiento from './components/Form/form';
import DetalleAlojamiento from './components/vistaDetallada/VistaDetallada';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<DetalleAlojamiento />} />
        <Route path="/sobreNosotros" element={< SobreNosotros/>} />
        <Route path="/form-admin" element={< AddAlojamiento/>} />
        <Route path="/detalle/:id" element={<DetalleAlojamiento />} /> {/* Ruta para DetalleAlojamiento */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
