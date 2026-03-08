import './About.css';

const pillars = [
  {
    icon: '🔬',
    title: 'Science-Led Innovation',
    desc: 'Every recommendation is grounded in peer-reviewed research and validated lab data.',
  },
  {
    icon: '🌿',
    title: 'Sustainability First',
    desc: 'We design solutions that minimize environmental impact without compromising performance.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Approach',
    desc: 'We embed with your team, acting as an extension of your internal R&D capabilities.',
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">Where Science Meets Culinary Excellence</h2>
          <p className="section-subtitle">
            Founded by a team of food scientists, flavor chemists, and process engineers,
            Consellum has spent over 15 years at the forefront of food technology innovation.
          </p>
          <p className="about__body">
            We work with leading food and beverage companies, startups, and ingredient manufacturers
            to tackle their most complex formulation challenges — from clean-label reformulation and
            protein fortification to novel fermentation processes and alt-protein development.
          </p>
          <p className="about__body">
            Our multidisciplinary team combines deep scientific expertise with a pragmatic,
            commercial mindset to deliver solutions that work in the lab <em>and</em> on the shelf.
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
