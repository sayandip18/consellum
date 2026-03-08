import './Home.css';

const Home = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home">
      <div className="home__bg" />
      <div className="home__overlay" />

      <div className="home__content">
        <span className="home__tag">Food Technology R&amp;D Consultancy</span>
        <h1 className="home__title">
          Shaping the <em>Future of Food</em> Through Science
        </h1>
        <p className="home__subtitle">
          Consellum bridges the gap between cutting-edge food science and
          market-ready innovation — helping food companies create healthier,
          more sustainable, and better-tasting products.
        </p>
        <div className="home__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('services')}>
            Explore Our Services
          </button>
          <button className="btn btn--outline" onClick={() => scrollTo('contact')}>
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
