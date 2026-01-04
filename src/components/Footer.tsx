import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src="/images/logo.svg" alt="Logo" />
      <div className="footer-inner">
        <span className="footer-location">
          <img
            className="icon-contact"
            src="/images/icon-location.svg"
            alt=""
          />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum autem
          tenetur porro vel rem quidem, commodi architecto fuga quos id
          temporibus praesentium
        </span>
        <div className="footer-contact">
          <span className="footer-phone">
            <img className="icon-contact" src="/images/icon-phone.svg" alt="" />
            +1-543-123-4567
          </span>
          <span className="footer-email">
            <img className="icon-contact" src="/images/icon-email.svg" alt="" />
            example@fylo.com
          </span>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">
            About Us
          </a>
          <a href="#" className="footer-link">
            Jobs
          </a>
          <a href="#" className="footer-link">
            Press
          </a>
          <a href="#" className="footer-link">
            Blog
          </a>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">
            Contact Us
          </a>
          <a href="#" className="footer-link">
            Terms
          </a>
          <a href="#" className="footer-link">
            Privacy
          </a>
        </div>

        <div className="footer-social">
          <a href="#" className="social-icon">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;