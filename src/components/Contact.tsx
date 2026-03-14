import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    if (result.success) {
      alert("Thank you for your message. We will be in touch shortly.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__info">
          <span className="section-tag">Let's Talk</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact__info-body">
            Whether you have a specific R&amp;D challenge, are exploring a new
            product concept, or simply want to understand how we can support
            your team — we'd love to hear from you.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon">📍</div>
              <div>
                <span className="contact__detail-label">Office</span>
                <span className="contact__detail-value">
                  5C/15, Mohini Villa
                  <br />
                  Kolkata - 700052, West Bengal
                </span>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon">✉️</div>
              <div>
                <span className="contact__detail-label">Email</span>
                <span className="contact__detail-value">
                  hello@consellum.com
                </span>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon">📞</div>
              <div>
                <span className="contact__detail-label">Phone</span>
                <span className="contact__detail-value">+91 9038652740</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form-wrapper">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="form__group">
                <label className="form__label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="form__input"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="form__input"
                  placeholder="Smith"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form__row">
              <div className="form__group">
                <label className="form__label" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="form__input"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form__input"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="service">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                className="form__select"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service...</option>
                <option value="bis-isi">BIS / ISI Certification</option>
                <option value="fssai">FSSAI License / Registration</option>
                <option value="trademark">Trademark</option>
                <option value="npd">New Food Product Development</option>
                <option value="iso">ISO Certification</option>
                <option value="misc">Misc. Services</option>
                <option value="other">Other / General Enquiry</option>
              </select>
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form__textarea"
                placeholder="Tell us about your project or challenge..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form__submit">
              Send Message →
            </button>
          </form>
        </div>
      </div>

      <div className="contact__footer">
        <div className="contact__footer-logo">
          <span className="contact__footer-logo-mark">C</span>
          <span className="contact__footer-logo-text">Consellum</span>
        </div>
        <span className="contact__footer-copy">
          © {new Date().getFullYear()} Consellum Ltd. All rights reserved.
        </span>
      </div>
    </section>
  );
};

export default Contact;
