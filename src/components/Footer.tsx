import "./Footer.css";
import Logo from "../assets/logo.svg?react";
import IconLocation from "../assets/icon-location.svg?react";
import IconPhone from "../assets/icon-phone.svg?react";
import IconEmail from "../assets/icon-email.svg?react";

function Footer() {
  return (
    <footer className="site-footer">
      <Logo className="footer-logo" />
      <div className="footer-inner">
        <div className="footer-location">
          <IconLocation className="icon-contact" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            autem tenetur porro vel rem quidem, commodi architecto fuga quos id
            temporibus praesentium
          </p>
        </div>
        <div className="footer-contact">
          <span className="footer-phone">
            <IconPhone className="icon-contact" />
            +1-543-123-4567
          </span>
          <span className="footer-email">
            <IconEmail className="icon-contact" />
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
