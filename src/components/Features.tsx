import "./Features.css"

function Features() {
  return (
    <section id="features" className="features">
      <div className="features-grid">
        <div className="feature-card">
          <img
            className="feature-icon"
            src="/images/icon-access-anywhere.svg"
            alt=""
          />

          <h3 className="feature-title">Access your files, anywhere</h3>
          <p className="feature-text">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
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
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
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
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
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
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;