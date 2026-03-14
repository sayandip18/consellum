import './WhyChooseUs.css';

const challenges = [
  { icon: '📑', label: 'Complex Regulatory Frameworks' },
  { icon: '🗂️', label: 'Extensive Documentation' },
  { icon: '🔄', label: 'Frequent Policy Changes' },
  { icon: '⏳', label: 'Slow Approval Processes' },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why">
      <div className="why__inner">
        <div className="why__text">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Simplifying Complexity, Enabling Growth</h2>
          <p className="about__body">
            MSMEs and growing businesses in India face complex regulatory frameworks, extensive
            documentation, frequent policy changes, and slow approval processes—often without
            in-house regulatory expertise. These challenges lead to delays, rejections, and
            increased compliance risk.
          </p>
          <p className="about__body">
            We simplify this complexity through expert-led, end-to-end regulatory support, managing
            documentation, approvals, and authority coordination for BIS/ISI and FSSAI
            requirements—enabling faster compliance, reduced risk, and uninterrupted business growth.
          </p>

          <div className="why__challenges">
            {challenges.map((c) => (
              <div key={c.label} className="why__challenge">
                <span className="why__challenge-icon">{c.icon}</span>
                <span className="why__challenge-label">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="why__card">
          <div className="why__card-dot-grid" />
          <div className="why__card-body">
            <div className="why__card-icon">🏆</div>
            <h3 className="why__card-title">Expert-Led. End-to-End.</h3>
            <ul className="why__card-list">
              <li>BIS/ISI certifications &amp; lab setup</li>
              <li>FSSAI licensing &amp; compliance</li>
              <li>Documentation &amp; approval management</li>
              <li>Authority coordination</li>
              <li>Faster compliance timelines</li>
              <li>Reduced compliance risk</li>
            </ul>
            <div className="why__card-badge">
              <span className="why__card-badge-text">Uninterrupted Business Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
