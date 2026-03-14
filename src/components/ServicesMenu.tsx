import { useState } from "react";
import "./ServicesMenu.css";

interface ServiceItem {
  id: string;
  label: string;
}

interface ServiceSection {
  id: string;
  title: string;
  items: ServiceItem[];
}

const SERVICES_DATA: ServiceSection[] = [
  {
    id: "A1",
    title: "BIS / ISI Certification Consultancy Services",
    items: [
      { id: "A1.1", label: "New BIS / ISI License Application" },
      { id: "A1.2", label: "Renewal BIS / ISI License Application" },
      {
        id: "A1.3",
        label: "BIS / ISI License Inclusion/Modification Application",
      },
      { id: "A1.4", label: "New BIS / ISI License Suspension Case" },
      { id: "A1.5", label: "New BIS Hallmark Registration" },
      { id: "A1.6", label: "BIS/ISI Lab Set Up" },
      { id: "A1.7", label: "BIS/ISI Product Testing" },
      { id: "A1.8", label: "BIS/ISI Portal Management" },
      { id: "A1.9", label: "BIS/ISI Compliance" },
      { id: "A1.10", label: "BIS/ISI FMCS Application" },
    ],
  },
  {
    id: "A2",
    title: "FSSAI Consultancy Services",
    items: [
      { id: "A2.1", label: "FSSAI License Application – New" },
      { id: "A2.2", label: "FSSAI License Application – Renewal" },
      { id: "A2.3", label: "FSSAI License Application – Modification" },
      { id: "A2.4", label: "FSSAI Annual Return" },
      { id: "A2.5", label: "FSSAI Schedule IV Compliance" },
      { id: "A2.6", label: "FSSAI Portal Management" },
      { id: "A2.7", label: "FSSAI Food Safety Audit" },
      { id: "A2.8", label: "FSSAI Import / Export Clearance" },
      { id: "A2.9", label: "FSSAI Food Testing Lab Set Up" },
    ],
  },
  {
    id: "A3",
    title: "Trademark Services",
    items: [
      { id: "A3.1", label: "New Trademark Registration" },
      { id: "A3.2", label: "Renewal Trademark Registration" },
      { id: "A3.3", label: "Trademark Registration Objection" },
      { id: "A3.4", label: "Trademark Search Report" },
      { id: "A3.5", label: "Trademark Query" },
    ],
  },
  {
    id: "A4",
    title: "ISO Certification",
    items: [
      { id: "A4.1", label: "New ISO Certification" },
      { id: "A4.2", label: "Renewal ISO Certification" },
      { id: "A4.3", label: "ISO Certification Query" },
    ],
  },
  {
    id: "A5",
    title: "New Product Development – Food / Packaging / Chemicals",
    items: [
      { id: "A5.1", label: "Food Product Development" },
      { id: "A5.2", label: "Food Packaging and Labelling Design" },
      { id: "A5.3", label: "Food Packaging Development" },
      { id: "A5.4", label: "Chemical Product Development" },
    ],
  },
  {
    id: "A6",
    title: "Misc. Services",
    items: [{ id: "A6.1", label: "MSME / UDHYAM Aadhar" }],
  },
];

interface ServicesMenuProps {
  onSelect?: (itemId: string) => void;
}

export default function ServicesMenu({ onSelect }: ServicesMenuProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  return (
    <nav className="services-menu" aria-label="Portal Services">
      <div className="services-menu__header">
        <span className="services-menu__eyebrow">Our Services</span>
        <h2 className="services-menu__title">Portal Service Directory</h2>
      </div>

      <ul className="services-menu__list" role="list">
        {SERVICES_DATA.map((section) => {
          const isOpen = openSections.has(section.id);
          return (
            <li
              key={section.id}
              className={`services-menu__section${isOpen ? " services-menu__section--open" : ""}`}
            >
              <button
                className="services-menu__trigger"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isOpen}
                aria-controls={`section-items-${section.id}`}
              >
                <span className="services-menu__trigger-id">{section.id}</span>
                <span className="services-menu__trigger-title">
                  {section.title}
                </span>
                <svg
                  className="services-menu__chevron"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4.5 6.75L9 11.25L13.5 6.75"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                id={`section-items-${section.id}`}
                className="services-menu__items"
              >
                <ul className="services-menu__items-inner" role="list">
                {section.items.map((item) => (
                  <li key={item.id} className="services-menu__item">
                    <button
                      className="services-menu__item-btn"
                      onClick={() => onSelect?.(item.id)}
                    >
                      <span className="services-menu__item-id">{item.id}</span>
                      <span className="services-menu__item-label">
                        {item.label}
                      </span>
                      <svg
                        className="services-menu__item-arrow"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
