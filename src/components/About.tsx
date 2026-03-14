import './About.css';

const pillars = [
  {
    icon: '🏢',
    title: 'Enterprise & Manufacturer Partners',
    desc: 'Delivering structured, compliant solutions that support efficient market entry and regulatory assurance.',
  },
  {
    icon: '📈',
    title: 'Investor-Ready Growth',
    desc: 'Commercially viable strategies aligned with long-term business growth and scalable operations.',
  },
  {
    icon: '🤝',
    title: 'End-to-End Support',
    desc: 'Your personal Business Consultant across every stage of your business journey.',
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">Your Personal Business Consultant</h2>
          <p className="section-subtitle">
            We are Team Consellum, providing end to end support for all of your business problems.
          </p>
          <p className="about__body">
            We partner with enterprises, manufacturers, and investors to deliver structured, compliant,
            and commercially viable solutions that support efficient market entry, regulatory assurance,
            and long-term business growth.
          </p>

          <div className="about__pillars">
            {pillars.map((p) => (
              <div key={p.title} className="about__pillar">
                <div className="about__pillar-icon">{p.icon}</div>
                <div className="about__pillar-content">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__visual">
          <div className="about__dot-grid" />
          <div className="about__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Food scientist working in laboratory"
            />
          </div>
          <div className="about__badge">
            <div className="about__badge-icon">🏆</div>
            <div className="about__badge-text">
              <strong>ISO 22000</strong>
              <span>Certified Consultancy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
