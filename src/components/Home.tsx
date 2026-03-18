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
        <h1 className="home__title">
          End-to-End <br /> <em>Techno-Legal Compliance</em> <br /> Partner for
          Your Business
        </h1>
        <p className="home__subtitle">
          One-stop solution for certification, licensing, and product
          compliance.
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
          <span className="home__stat-number">5+</span>
          <span className="home__stat-label">Years Experience</span>
        </div>
        <div className="home__stat">
          <span className="home__stat-number">50+</span>
          <span className="home__stat-label">Projects Delivered</span>
        </div>
        <div className="home__stat">
          <span className="home__stat-number">60+</span>
          <span className="home__stat-label">Clients</span>
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
