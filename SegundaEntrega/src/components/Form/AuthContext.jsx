import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(''); 


  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };