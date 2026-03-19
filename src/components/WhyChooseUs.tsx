import "./WhyChooseUs.css";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2V17a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.8A7 7 0 0 1 12 2z" />
        <path d="M9 21h6M10 17v-2M14 17v-2" />
      </svg>
    ),
    title: "Expert Regulatory Knowledge",
    desc: "Deep understanding of BIS standards, FSSAI regulations, ISO certification, and licensing frameworks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
    title: "End-to-End Consultancy",
    desc: "Complete support from documentation and application filing to approval and compliance management.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Faster Approval Process",
    desc: "Efficient coordination with authorities and structured documentation to reduce delays and rejections.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 17l4-8 4 4 4-6 4 5" />
        <path d="M17 9h4v4" />
      </svg>
    ),
    title: "Business-Focused Solutions",
    desc: "Practical guidance designed to help businesses launch products smoothly and scale with confidence.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why">
      <div className="why__top">
        <div className="why__top-inner">
          <div className="why__text">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              Expert Guidance for Faster Certifications &amp; Business Compliance
            </h2>
            <p className="about__body">
              Navigating government certifications and regulatory approvals in
              India can be complex and time-consuming.{" "}
              <strong>Consellum Advisory Services</strong> helps businesses
              simplify this process with expert consultancy, structured
              documentation, and reliable regulatory support.
            </p>
            <p className="about__body">
              We assist manufacturers, startups, and MSMEs in obtaining{" "}
              <strong>BIS / ISI certification, FSSAI licenses, ISO
              certification, trademark registration, export-import licenses</strong>,
              and other regulatory approvals—helping products reach the market
              faster and fully compliant.
            </p>
          </div>
        </div>
      </div>

      <div className="why__bottom">
        <div className="why__bottom-inner">
          <h3 className="why__bottom-title">
            Why Businesses Trust Consellum Advisory Services
          </h3>
          <div className="why__cards">
            {cards.map((card) => (
              <div className="why__feat-card" key={card.title}>
                <div className="why__feat-icon">{card.icon}</div>
                <h4 className="why__feat-title">{card.title}</h4>
                <p className="why__feat-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="why__tagline">
            <strong>Consellum Advisory Services</strong> —{" "}
            <em>Simplifying Compliance, Enabling Business Growth.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
