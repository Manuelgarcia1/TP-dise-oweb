import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo/Logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="contenedor-footer">
        <div className="newsletter">
          <label className="newsletter-label" htmlFor="email">Newsletter & Special Promo</label>
          <div className="newsletter-input">
            <input className="input-newsletter" type="email" id="email" placeholder="Ingrese su email" />
            <button className="button">Subscríbete</button>
          </div>
        </div>
        <figure className='logo-container'>
          <img src={logo} alt="logo" />
        </figure>
        <div className="footer-nav-container">         
          <ul className="footer-nav">
            <li className="footer-nav-link"><Link to="/sobreNosotros">Sobre Nosotros</Link></li>
            <li className="footer-nav-link"><Link to="/#cards-alojamientos">Alojamientos</Link></li>
            <li className="footer-nav-link"><Link to="/contacto">Contáctanos</Link></li>
          </ul>
        </div>                                                  
      </div>
      <div className="creditos">
        <p className="copyright-footer">© Copyright Dream Voyages. All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
