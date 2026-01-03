import ArrowIcon from "../assets/icon-arrow.svg?react";
import "./Productivity.css"

function Productivity() {
  return (
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
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>

          <p className="productivity-text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <a className="productivity-link" href="#">
            See how Fylo works <ArrowIcon className="icon-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Productivity;
