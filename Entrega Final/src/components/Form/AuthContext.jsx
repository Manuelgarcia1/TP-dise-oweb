import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username') || ''); 
  const [isRegistrado, setIsRegistrado] = useState(localStorage.getItem('isRegistrado') || '0');

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    if (username) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
    localStorage.setItem('isRegistrado', isRegistrado);
  }, [isAuthenticated, username, isRegistrado]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, username, setUsername, isRegistrado, setIsRegistrado }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };