import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/navbar/NavbarComponent';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import FormularioContacto from './components/contacto/contacto';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import Login from './components/seguridad/seguridad';
import AddAlojamiento from './components/Form/form';
import { AuthProvider } from './components/Form/AuthContext';
function App() {
  return (
    <AuthProvider>
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<FormularioContacto />} />
        <Route path="/sobreNosotros" element={< SobreNosotros/>} />
        <Route path="/seguridad" element={< Login/>} />
        <Route path="/addAlojamiento" element={< AddAlojamiento/>} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
