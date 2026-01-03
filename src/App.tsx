import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero-section">
          <div className="hero-section-inner">
            <img
              className="hero-img"
              src="/images/illustration-intro.png"
              alt=""
            />

            <h1 className="hero-title">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="hero-description">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>

            <button type="button" className="btn btn-primary hero-cta">
              Get Started
            </button>
          </div>
        </section>

        <section className="features">
          <div className="features-grid">
            <div className="feature-card">
              <img
                className="feature-icon"
                src="/images/icon-access-anywhere.svg"
                alt=""
              />

              <h3 className="feature-title">Access your files, anywhere</h3>
              <p className="feature-text">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
            <div className="feature-card">
              <img
                className="feature-icon"
                src="/images/icon-security.svg"
                alt=""
              />

              <h3 className="feature-title">Security you can trust</h3>
              <p className="feature-text">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
            <div className="feature-card">
              <img
                className="feature-icon"
                src="/images/icon-collaboration.svg"
                alt=""
              />

              <h3 className="feature-title">Real-time collaboration</h3>
              <p className="feature-text">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
            <div className="feature-card">
              <img
                className="feature-icon"
                src="/images/icon-any-file.svg"
                alt=""
              />
              <h3 className="feature-title">Store any type of file</h3>
              <p className="feature-text">
                Whether you're sharing holidays photos or work documents, Fylo
                has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </div>
          </div>
        </section>

        <section className="productivity">
          <div className="productivity-inner">
            <img
              className="productivity-illustration"
              src="/images/illustration-stay-productive.png"
              alt="Illustration Stay Productive"
            />

            <div className="productivity-content">
              <h3 className="productivity-title">
                Stay productive, wherever you are
              </h3>

              <p className="productivity-text">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>

              <p className="productivity-text">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>

              <a className="productivity-link" href="#">
                See how Fylo works{" "}
                <img src="/images/icon-arrow.svg" alt="icon-arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <p className="testimonial-text">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>

              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  src="/images/profile-1.jpg"
                  alt="Satish Patel Avatar"
                />
                <div className="author-info">
                  <span className="author-name">Satish Patel</span>
                  <span className="author-role">Founder & CEO, Huddle</span>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-text">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>

              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  src="/images/profile-2.jpg"
                  alt="Satish Patel Avatar"
                />
                <div className="author-info">
                  <span className="author-name">Bruce McKenzie</span>
                  <span className="author-role">Founder & CEO, Huddle</span>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-text">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>

              <div className="testimonial-author">
                <img
                  className="author-avatar"
                  src="/images/profile-3.jpg"
                  alt="Satish Patel Avatar"
                />
                <div className="author-info">
                  <span className="author-name">Iva Boyd</span>
                  <span className="author-role">Founder & CEO, Huddle</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="cta">
          <div className="cta-box">
            <h2 className="cta-title">Get early access today</h2>
            <p className="cta-text">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>

            <form className="cta-form">
              <input
                className="cta-input"
                type="email"
                placeholder="email@example.com"
              />
              <button type="submit" className="btn btn-primary cta-button">
                Get Started For Free
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img className="footer-logo" src="/images/logo.svg" alt="Logo" />
        <div className="footer-inner">
          <span className="footer-location">
            <img
              className="icon-contact"
              src="/images/icon-location.svg"
              alt=""
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            autem tenetur porro vel rem quidem, commodi architecto fuga quos id
            temporibus praesentium
          </span>
          <div className="footer-contact">
            <span className="footer-phone">
              <img
                className="icon-contact"
                src="/images/icon-phone.svg"
                alt=""
              />
              +1-543-123-4567
            </span>
            <span className="footer-email">
              <img
                className="icon-contact"
                src="/images/icon-email.svg"
                alt=""
              />
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
    </>
  );
}

export default App;
