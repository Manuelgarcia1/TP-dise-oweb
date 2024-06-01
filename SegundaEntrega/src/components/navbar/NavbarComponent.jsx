import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';
import headerImg from '../../assets/img/header.jpg';
import logo from '../../assets/logo/Logo.png';


const NavbarComponent = () => {
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
              <li className="nav-link"><Link to="/" onClick={navLinkClick}>Home</Link></li>
              <li className="nav-link"><Link to="/sobreNosotros" onClick={navLinkClick}>Sobre Nosotros</Link></li>
              <li className="logo-desktop">
                <figure>
                  <img src={logo} alt="Logo de la web" />
                </figure>
              </li>
              <li className="nav-link"><Link to="/contacto" onClick={navLinkClick}>Contactanos</Link></li>
              <li className="nav-link"><Link to="/form-admin" onClick={navLinkClick}>Admin</Link></li>
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