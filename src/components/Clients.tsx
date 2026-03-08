import './Clients.css';

const clients = [
  {
    initials: 'NB',
    name: 'NovaBite Technologies',
    sector: 'Alt-Protein',
    desc: 'Collaborated on precision fermentation-based protein texturisation for their flagship plant-based range.',
  },
  {
    initials: 'TG',
    name: 'TerraGrain Co.',
    sector: 'Grain & Bakery',
    desc: 'Reformulated their core bread lineup to achieve clean-label status while maintaining 12-month shelf life.',
  },
  {
    initials: 'FF',
    name: 'FutureFarms',
    sector: 'Agri-Food Tech',
    desc: 'Developed novel upcycling processes that converted crop by-products into high-value functional ingredients.',
  },
  {
    initials: 'HB',
    name: 'Harvest Biotech',
    sector: 'Nutraceuticals',
    desc: 'Supported clinical formulation and bioavailability optimisation for a new omega-3 enrichment platform.',
  },
  {
    initials: 'CA',
    name: 'CulinaryAI',
    sector: 'Food Tech / AI',
    desc: 'Provided sensory datasets and flavour mapping expertise to train their AI-driven recipe generation engine.',
  },
  {
    initials: 'GP',
    name: 'GreenProtein Labs',
    sector: 'Sustainable Food',
    desc: 'Led scale-up process engineering for their microalgae-based protein extraction line from pilot to commercial.',
  },
];

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="clients__inner">
        <div className="clients__header">
          <span className="section-tag">Who We Work With</span>
          <h2 className="section-title">Our Clients</h2>
          <p className="section-subtitle">
            We partner with innovative food companies at every stage — from early-stage
            startups to established global brands.
          </p>
        </div>

        <div className="clients__grid">
          {clients.map((client) => (
            <div key={client.name} className="clients__card">
              <div className="clients__card-logo">{client.initials}</div>
              <div className="clients__card-name">{client.name}</div>
              <div className="clients__card-sector">{client.sector}</div>
              <p className="clients__card-desc">{client.desc}</p>
            </div>
          ))}
        </div>

        <div className="clients__testimonial">
          <p className="clients__testimonial-text">
            Consellum didn't just solve our formulation problem — they transformed
            how we think about product development. Their depth of knowledge across
            food science disciplines is unmatched in the industry.
          </p>
          <div className="clients__testimonial-author">
            <div className="clients__testimonial-avatar">SR</div>
            <div>
              <span className="clients__testimonial-name">Dr. Sarah Reinhardt</span>
              <span className="clients__testimonial-role">Chief Innovation Officer, NovaBite Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
