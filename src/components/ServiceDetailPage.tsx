import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERVICES_LIST } from "./servicesData";
import "./ServiceDetailPage.css";

export interface ServiceSubtopic {
  label: string;
  desc: string;
}

export interface ServiceData {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  subtopics: ServiceSubtopic[];
}

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = SERVICES_LIST.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  if (!service) {
    return (
      <div className="sdp-not-found">
        <p>Service not found.</p>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    );
  }

  return (
    <div className="sdp-page">
      <div className="sdp-header">
        <button
          className="sdp-back"
          onClick={() => navigate("/")}
          aria-label="Back to home"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
        <div className="sdp-header__content">
          <span className="sdp-eyebrow">Our Services</span>
          <h1 className="sdp-title">{service.title}</h1>
          <p className="sdp-description">{service.description}</p>
        </div>
      </div>

      <div className="sdp-body">
        <h2 className="sdp-subtopics-heading">What We Offer</h2>
        <ul className="sdp-subtopics" role="list">
          {service.subtopics.map((topic, i) => (
            <li key={i} className="sdp-subtopic">
              <div className="sdp-subtopic__index">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="sdp-subtopic__content">
                <h3 className="sdp-subtopic__label">{topic.label}</h3>
                <p className="sdp-subtopic__desc">{topic.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="sdp-cta">
          <p className="sdp-cta__text">
            Interested in this service? Let's talk.
          </p>
          <button
            className="sdp-cta__btn"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
