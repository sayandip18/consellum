import { useState, useEffect, useRef, useCallback } from "react";
import "./Services.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1400&q=80",
    title: "BIS / ISI Certification",
    tag: "Certification",
    desc: "End-to-end support for all BIS/ISI standards certifications, from documentation and testing coordination to approvals and compliance.",
  },
  {
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&q=80",
    title: "FSSAI License / Registration",
    tag: "Licensing",
    desc: "Comprehensive FSSAI licensing, registration, and compliance management for food businesses across all categories.",
  },
  {
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&q=80",
    title: "Trademark",
    tag: "Intellectual Property",
    desc: "Professional trademark search, filing, and registration services to protect and strengthen your brand identity.",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80",
    title: "New Food Product Development",
    tag: "NPD",
    desc: "Technical and regulatory-led product development support from concept to compliant market launch.",
  },
  {
    image: "https://images.unsplash.com/photo-1616489953021-5d5dcc9ea5fc?w=1400&q=80",
    title: "ISO Certification",
    tag: "ISO",
    desc: "Structured ISO certification support to help organizations implement standards and achieve accredited certification.",
  },
  {
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1400&q=80",
    title: "Misc. Services",
    tag: "Advisory",
    desc: "Additional regulatory, advisory, and compliance services tailored to specific business and operational requirements.",
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
            We provide end-to-end regulatory and certification consulting,
            including all BIS/ISI standards certifications and lab setup, FSSAI
            licensing and compliance, food testing lab setup, MSME registration,
            trademark services, and New Product Development for food, packaging,
            and chemical industries—enabling compliant, efficient, and scalable
            operations.
          </p>
        </div>
        <div className="services__nav-buttons">
          <button
            className="services__nav-btn"
            onClick={prev}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            className="services__nav-btn"
            onClick={next}
            aria-label="Next slide"
          >
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
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
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
              className={`services__dot${i === current ? " services__dot--active" : ""}`}
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
