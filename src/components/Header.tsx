import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { SERVICES_LIST } from './servicesData';
import { UPDATES_LIST } from './updatesData';

const ChevronIcon = () => (
  <svg
    className="header__dropdown-chevron"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 5L7 9L11 5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'services' | 'updates' | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const updatesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedInside =
        servicesRef.current?.contains(target) || updatesRef.current?.contains(target);
      if (!clickedInside) setOpenDropdown(null);
    };
    if (openDropdown) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggle = (key: 'services' | 'updates') =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  return (
    <header className={`header${scrolled || !isHome ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">
          <span className="header__logo-mark">C</span>
          <span className="header__logo-text">Consellum</span>
        </div>

        <nav className="header__nav">
          <a
            href="#home"
            className="header__nav-link"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>

          <a
            href="#about"
            className="header__nav-link"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About Us
          </a>

          {/* Services dropdown */}
          <div
            className={`header__dropdown${openDropdown === 'services' ? ' header__dropdown--open' : ''}`}
            ref={servicesRef}
          >
            <button
              className="header__nav-link header__nav-link--dropdown"
              onClick={() => toggle('services')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'services'}
            >
              Services
              <ChevronIcon />
            </button>

            <div className="header__dropdown-menu" role="menu">
              {SERVICES_LIST.map((service) => (
                <button
                  key={service.id}
                  className="header__dropdown-item"
                  role="menuitem"
                  onClick={() => {
                    setOpenDropdown(null);
                    navigate(`/services/${service.id}`);
                  }}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Updates dropdown */}
          <div
            className={`header__dropdown${openDropdown === 'updates' ? ' header__dropdown--open' : ''}`}
            ref={updatesRef}
          >
            <button
              className="header__nav-link header__nav-link--dropdown"
              onClick={() => toggle('updates')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'updates'}
            >
              Updates
              <ChevronIcon />
            </button>

            <div className="header__dropdown-menu" role="menu">
              {UPDATES_LIST.map((cat) => (
                <button
                  key={cat.id}
                  className="header__dropdown-item"
                  role="menuitem"
                  onClick={() => setOpenDropdown(null)}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <a
            href="#clients"
            className="header__nav-link"
            onClick={(e) => handleNavClick(e, 'clients')}
          >
            Our Clients
          </a>

          <a
            href="#contact"
            className="header__nav-link header__nav-link--cta"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
