import "./HeroSection.css"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-inner">
        <img
          className="hero-img"
          src="/fylo-dark-theme-landing-page-master-ts/images/illustration-intro.png"
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
  );
}

export default HeroSection;