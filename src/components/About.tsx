import './About.css';

const pillars = [
  {
    icon: '📋',
    title: 'Certification & Licensing Expertise',
    desc: 'Professional support for BIS / ISI Certification, FSSAI License, ISO Certification, Trademark, Patent Services, and Export-Import (IEC) registration.',
  },
  {
    icon: '🔬',
    title: 'Product Development & Compliance',
    desc: 'Helping businesses with new product development in food, packaging, and chemicals, along with BIS-compliant logo and label design.',
  },
  {
    icon: '🤝',
    title: 'End-to-End Business Support',
    desc: 'Complete guidance from product idea, certification, licensing, and regulatory approvals to successful market launch.',
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">Your Trusted Certification & Compliance Consultant</h2>
          <p className="section-subtitle">
            We are Consellum Advisory Services, providing end-to-end consultancy for business certifications, regulatory approvals, and licensing services across India.
          </p>
          <p className="about__body">
            We work with manufacturers, startups, and growing businesses to deliver structured, compliant, and practical solutions that help products enter the market smoothly and grow sustainably.
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
