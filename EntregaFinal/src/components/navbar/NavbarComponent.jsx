import { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './NavbarComponent.css';
import headerImg from '../../assets/img/header.jpg';
import logo from '../../assets/logo/Logo.png';
import { AuthContext } from '../../components/Form/AuthContext';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated, setIsRegistrado,username } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('username',0);
  localStorage.clear(username);
    setIsAuthenticated(false);
    setIsRegistrado(0); 
    
  navigate('/seguridad');

  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClick = () => {
    if (isOpen) {
      toggleNavbar();
    }
  };
  const usernameBeforeAt = username.split('@')[0];

  return (
    <header className="header-area">
      <img src={headerImg} alt="" className="background-image" />
      <div className="navbar-area">
        <div className="container-navbar cointainer-nav-mobile">
          <nav className="site-navbar">
            <figure className="logo-mobile">
              <img src={logo} alt="Logo de la web" />
            </figure>
            <ul className={`nav-container-links ${isOpen ? 'open' : ''}`}>
              <li className="nav-link"><Link to="/" onClick={navLinkClick}>Home</Link></li>
              <li className="nav-link"><Link to="/sobreNosotros" onClick={navLinkClick}>Sobre Nosotros</Link></li>
              <li className="logo-desktop">
                <figure>
                  <img src={logo} alt="Logo de la web" />
                </figure>
              </li>
              <li className="nav-link"><Link to="/contacto" onClick={navLinkClick}>Contactanos</Link></li>
              <li className="nav-link">
                <Link to={isAuthenticated ? "/addAlojamiento" : "/seguridad"} onClick={navLinkClick}>
                  Admin
                </Link>
              </li>
                {isAuthenticated && (
                  <div className="logout-area">
                    <div className='name-container-user'>
                      <span>Bienvenido,</span>
                      <span className='user-name'>{usernameBeforeAt}</span>
                    </div>
                    <button className='btn-logout' onClick={handleLogout}>Cerrar sesión</button>
                  </div>
                )}
            </ul>
            <button className="nav-toggler" onClick={toggleNavbar}>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
      <div className="title-area">
        <h1 className="header-title">Dream Voyages</h1>
      </div>
    </header>
  );
};

export default NavbarComponent;