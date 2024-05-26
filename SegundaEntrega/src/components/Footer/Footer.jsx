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
            <li className="footer-nav-link"><a href="#">About us</a></li>
            <li className="footer-nav-link"><a href="#">FAQ</a></li>
            <li className="footer-nav-link"><a href="#">Services & Facilities</a></li>
            <li className="footer-nav-link"><a href="#">Contact</a></li>
            <li className="footer-nav-link"><a href="#">Term of Use</a></li>
            <li className="footer-nav-link"><a href="#">Careers</a></li>
            <li className="footer-nav-link"><a href="#">Location</a></li>
            <li className="footer-nav-link"><a href="#">Privacy Police</a></li>
            <li className="footer-nav-link"><a href="#">How to Book</a></li>
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
