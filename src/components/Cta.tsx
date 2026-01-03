import "./Cta.css"

function Cta() {
  return (
    <section className="cta">
      <div className="cta-box">
        <h2 className="cta-title">Get early access today</h2>
        <p className="cta-text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
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
  );
}

export default Cta;