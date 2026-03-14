import "./Home.css";

const Home = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="home">
      <div className="home__bg" />
      <div className="home__overlay" />

      <div className="home__content">
        <span className="home__tag">Food Tech Compliance and Consultancy</span>
        <h1 className="home__title">
          Your End-to-End <em>Business Compliance</em> Partner
        </h1>
        <p className="home__subtitle">
          From BIS/ISI certifications to FSSAI licensing, trademarks, and
          product development — Consellum handles the regulatory complexity so
          you can focus on growing your business.
        </p>
        <div className="home__actions">
          <button
            className="btn btn--primary"
            onClick={() => scrollTo("services")}
          >
            Explore Our Services
          </button>
          <button
            className="btn btn--outline"
            onClick={() => scrollTo("contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>

      <div className="home__stats">
        <div className="home__stat">
          <span className="home__stat-number">15+</span>
          <span className="home__stat-label">Years Experience</span>
        </div>
        <div className="home__stat">
          <span className="home__stat-number">200+</span>
          <span className="home__stat-label">Projects Delivered</span>
        </div>
        <div className="home__stat">
          <span className="home__stat-number">60+</span>
          <span className="home__stat-label">Global Clients</span>
        </div>
      </div>

      <div className="home__scroll-indicator">
        <div className="home__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Home;
