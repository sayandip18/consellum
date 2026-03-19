import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  ClipboardText,
  TrademarkRegistered,
  Scroll,
  Globe,
  FileDoc,
  Package,
  Flask,
  ShareNetwork,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { SERVICES_LIST } from "./servicesData";
import "./Services.css";

const SERVICE_ICONS: Record<string, Icon> = {
  "bis-isi": ShieldCheck,
  fssai: ClipboardText,
  trademark: TrademarkRegistered,
  patent: Scroll,
  iso: Globe,
  "logo-label": FileDoc,
  "export-import": Package,
  npd: Flask,
  other: ShareNetwork,
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="services">
      <div className="services__header">
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Consellum Advisory Services provides end-to-end consultancy for
          business certifications, regulatory approvals, and product compliance
          in India. We assist manufacturers, startups, and businesses with BIS /
          ISI certification, FSSAI licensing, ISO certification, trademark
          registration, export-import (IEC) license, and new product
          development—ensuring smooth compliance and faster market entry.
        </p>
      </div>

      <div className="services__grid">
        {SERVICES_LIST.map((service) => {
          const IconComponent = SERVICE_ICONS[service.id];
          return (
            <div key={service.id} className="services__card">
              <div className="services__card-body">
                <div className="services__card-title-row">
                  {IconComponent && (
                    <IconComponent size={28} weight="duotone" />
                  )}
                  <h3 className="services__card-title">{service.title}</h3>
                </div>
                <p className="services__card-desc">{service.shortDesc}</p>
              </div>
              <div className="services__card-btn-wrapper">
                <button
                  className="services__card-btn"
                  onClick={() => navigate(`/services/${service.id}`)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <ArrowRightIcon size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
