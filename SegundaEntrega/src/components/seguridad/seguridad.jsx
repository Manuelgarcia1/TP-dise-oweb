import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './seguridad.css';
import { AuthContext } from '../../components/Form/AuthContext';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate(); 
  const { setIsAuthenticated, setUsername } = useContext(AuthContext); // Mover esta línea aquí

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await fetch('http://localhost:3000/usuario/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ correo, contrasena }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert(data.message);
      setIsAuthenticated(true);
      setUsername(correo);
      navigate('/addAlojamiento'); 
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;