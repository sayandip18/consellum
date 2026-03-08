import { useState, useEffect, useRef, useCallback } from 'react';
import './Services.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1400&q=80',
    title: 'Ingredient Innovation',
    desc: 'Discovering novel ingredients, functional additives, and bioactive compounds that elevate product performance, extend shelf life, and enhance nutritional profiles.',
    tag: 'Formulation Science',
  },
  {
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&q=80',
    title: 'Process Optimization',
    desc: 'Engineering scalable manufacturing processes that preserve sensory quality, reduce waste, lower energy consumption, and improve production throughput.',
    tag: 'Process Engineering',
  },
  {
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&q=80',
    title: 'Product Development',
    desc: 'From concept to commercial launch — translating consumer insights into market-ready products that meet regulatory standards and delight target audiences.',
    tag: 'NPD & Commercialisation',
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80',
    title: 'Sensory Science',
    desc: 'Rigorous trained and consumer sensory panels, psychophysical testing, and data analytics ensuring every product delivers a consistent, exceptional eating experience.',
    tag: 'Sensory Evaluation',
  },
  {
    image: 'https://images.unsplash.com/photo-1616489953021-5d5dcc9ea5fc?w=1400&q=80',
    title: 'Food Safety & Compliance',
    desc: 'Comprehensive hazard analysis, HACCP design, shelf-life validation, and regulatory guidance across EU, US, and APAC markets to keep your products safe and compliant.',
    tag: 'Regulatory Affairs',
  },
  {
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1400&q=80',
    title: 'Sustainable Formulation',
    desc: 'Developing plant-based, upcycled, and eco-conscious formulations that align with environmental commitments and meet growing consumer demand for responsible products.',
    tag: 'Sustainability',
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  return (
    <section id="services" className="services">
      <div className="services__header">
        <div className="services__header-left">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive R&amp;D support across the full product lifecycle —
            from ideation to industrial scale-up.
          </p>
        </div>
        <div className="services__nav-buttons">
          <button className="services__nav-btn" onClick={prev} aria-label="Previous slide">
            ←
          </button>
          <button className="services__nav-btn" onClick={next} aria-label="Next slide">
            →
          </button>
        </div>
      </div>

      <div
        className="services__carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="services__track-wrapper">
          <div
            className="services__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="services__slide">
                <div
                  className="services__slide-bg"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
                <div className="services__slide-overlay" />
                <div className="services__slide-content">
                  <span className="services__slide-number">
                    {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </span>
                  <h3 className="services__slide-title">{slide.title}</h3>
                  <p className="services__slide-desc">{slide.desc}</p>
                  <span className="services__slide-tag">{slide.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="services__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`services__dot${i === current ? ' services__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
