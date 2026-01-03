import "./Testimonials.css"

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-grid">
        <article className="testimonial-card">
          <p className="testimonial-text">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
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
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
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
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
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
  );
}

export default Testimonials;