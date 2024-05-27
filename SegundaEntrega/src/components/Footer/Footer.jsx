import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="contenedor-footer">
        <div className="newsletter">
          <label className="newsletter-label" htmlFor="email">Newsletter & Special Promo</label><br />
          <div className="newsletter-input">
            <input className="input-newsletter" type="email" id="email" placeholder="Enter your email here" />
            <button className="button">Subscribe</button>
          </div>
        </div>
        <div className="footer-logo">
          <img src="assets/logo/Logo.png" alt="logo" />
          <ul className="footer-nav">
            <li className="footer-nav-link"><a href="#">Sobre Nosotros</a></li>
            <li className="footer-nav-link"><a href="#">FAQ</a></li>
            <li className="footer-nav-link"><a href="#">Servicios y Facilidades</a></li>
            <li className="footer-nav-link"><a href="#">Contactos</a></li>
            <li className="footer-nav-link"><a href="#">Terminos de Uso</a></li>
            <li className="footer-nav-link"><a href="#">Empleo</a></li>
            <li className="footer-nav-link"><a href="#">Locacion</a></li>
            <li className="footer-nav-link"><a href="#">Politicas de Privacidad</a></li>
            <li className="footer-nav-link"><a href="#">Como reservar</a></li>
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
