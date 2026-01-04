import "./Cta.css";
import { useState } from "react";

function Cta() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) setError("Please enter valid email address !");
    if (email === "") setError("Please enter your email !");
    else {
      setError("");
      setEmail("");
      console.log("Submitted:", email);
    }
  };

  return (
    <section id="sign_in" className="cta">
      <div className="cta-box">
        <h2 className="cta-title">Get early access today</h2>
        <p className="cta-text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <form className="cta-form" onSubmit={handleFormSubmit} noValidate>
          <input
            onChange={handleOnChange}
            className="cta-input"
            type="email"
            placeholder="email@example.com"
            value={email}
          />
          <button type="submit" className="btn btn-primary cta-button">
            Get Started For Free
          </button>
        </form>
        <p className="error">{error}</p>
      </div>
    </section>
  );
}

export default Cta;
