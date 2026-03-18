import { useEffect } from 'react';
import './ServiceDetailPage.css';

export interface ServiceSubtopic {
  label: string;
  desc: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  subtopics: ServiceSubtopic[];
}

interface ServiceDetailPageProps {
  service: ServiceData;
  onClose: () => void;
}

const ServiceDetailPage = ({ service, onClose }: ServiceDetailPageProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="sdp-overlay" role="dialog" aria-modal="true" aria-label={service.title}>
      <div className="sdp-backdrop" onClick={onClose} />
      <div className="sdp-panel">
        <div className="sdp-header">
          <div className="sdp-header__content">
            <span className="sdp-eyebrow">Our Services</span>
            <h1 className="sdp-title">{service.title}</h1>
            <p className="sdp-description">{service.description}</p>
          </div>
          <button className="sdp-close" onClick={onClose} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="sdp-body">
          <h2 className="sdp-subtopics-heading">What We Offer</h2>
          <ul className="sdp-subtopics" role="list">
            {service.subtopics.map((topic, i) => (
              <li key={i} className="sdp-subtopic">
                <div className="sdp-subtopic__index">{String(i + 1).padStart(2, '0')}</div>
                <div className="sdp-subtopic__content">
                  <h3 className="sdp-subtopic__label">{topic.label}</h3>
                  <p className="sdp-subtopic__desc">{topic.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="sdp-cta">
            <p className="sdp-cta__text">Interested in this service? Let's talk.</p>
            <button
              className="sdp-cta__btn"
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
