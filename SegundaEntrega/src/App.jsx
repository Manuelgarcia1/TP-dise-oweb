import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarComponent from './components/navbar/NavbarComponent';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import FormularioContacto from './components/contacto/contacto';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import Login from './components/seguridad/seguridad';
import AddAlojamiento from './components/Form/form';
import VistaDetallada from './components/vistaDetallada/VistaDetallada';
import { AuthProvider, AuthContext } from './components/Form/AuthContext';
import { useContext } from 'react';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/seguridad" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<FormularioContacto />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/seguridad" element={<Login />} />
          <Route path="/detalleAlojamiento/:idAlojamiento" element={<VistaDetallada />} />
          <Route path="/addAlojamiento" element={<ProtectedRoute><AddAlojamiento /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;