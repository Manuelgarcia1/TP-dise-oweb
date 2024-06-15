import './Footer.css';
import logo from '../../assets/logo/Logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="contenedor-footer">
        <div className="newsletter">
          <label className="newsletter-label" htmlFor="email">Newsletter & Special Promo</label><br />
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
            <li className="footer-nav-link"><a href="#">Sobre Nosotros</a></li>         
            <li className="footer-nav-link"><a href="#">Alojamientos</a></li>
            <li className="footer-nav-link"><a href="#">Contáctanos</a></li>
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
