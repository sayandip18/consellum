import './Clients.css';

const sections = [
  {
    tag: 'Who We Are',
    title: 'Team Consellum',
    body: 'We are Team Consellum, your personal Business Consultant, providing end to end support for all of your business problems. We partner with enterprises, manufacturers, and investors to deliver structured, compliant, and commercially viable solutions that support efficient market entry, regulatory assurance, and long-term business growth.',
    icon: '🤝',
    highlight: false,
  },
  {
    tag: 'What We Do',
    title: 'End-to-End Regulatory Consulting',
    body: 'We provide end-to-end regulatory and certification consulting, including all BIS/ISI standards certifications and lab setup, FSSAI licensing and compliance, food testing lab setup, MSME registration, trademark services, and New Product Development for food, packaging, and chemical industries—enabling compliant, efficient, and scalable operations.',
    icon: '📋',
    highlight: false,
  },
  {
    tag: 'Why Choose Us',
    title: 'Simplifying Complexity, Enabling Growth',
    body: 'MSMEs and growing businesses in India face complex regulatory frameworks, extensive documentation, frequent policy changes, and slow approval processes—often without in-house regulatory expertise. These challenges lead to delays, rejections, and increased compliance risk. We simplify this complexity through expert-led, end-to-end regulatory support, managing documentation, approvals, and authority coordination for BIS/ISI and FSSAI requirements—enabling faster compliance, reduced risk, and uninterrupted business growth.',
    icon: '🏆',
    highlight: true,
  },
];

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="clients__inner">
        <div className="clients__three-grid">
          {sections.map((s) =>
            s.highlight ? (
              <div key={s.tag} className="clients__info-card clients__info-card--highlight">
                <div className="clients__info-icon">{s.icon}</div>
                <span className="clients__info-tag clients__info-tag--light">{s.tag}</span>
                <h3 className="clients__info-title clients__info-title--light">{s.title}</h3>
                <p className="clients__info-body clients__info-body--light">{s.body}</p>
              </div>
            ) : (
              <div key={s.tag} className="clients__info-card">
                <div className="clients__info-icon">{s.icon}</div>
                <span className="clients__info-tag">{s.tag}</span>
                <h3 className="clients__info-title">{s.title}</h3>
                <p className="clients__info-body">{s.body}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
