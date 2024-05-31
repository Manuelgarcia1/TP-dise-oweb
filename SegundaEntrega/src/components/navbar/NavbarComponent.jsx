import React, { useState } from 'react';
import './NavbarComponent.css';
import headerImg from '../../assets/img/header.jpg';
import logo from '../../assets/logo/Logo.png';


const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClick = () => {
    if (isOpen) {
      toggleNavbar();
    }
  };

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
              <li className="nav-link"><a href="#" onClick={navLinkClick}>Home</a></li>
              <li className="nav-link"><a href="sobreNosotros.html" onClick={navLinkClick}>Sobre Nosotros</a></li>
              <li className="nav-link"><a href="contacto.html" onClick={navLinkClick}>Contactanos</a></li>
              <li className="logo-desktop">
                <figure>
                  <img src={logo} alt="Logo de la web" />
                </figure>
              </li>
              <li className="nav-link"><a href="#" onClick={navLinkClick}>Iniciar Sesión</a></li>
              <li className="nav-link padding-li"><a href="#" onClick={navLinkClick}>Registrarse</a></li>
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

export default HeaderComponent;