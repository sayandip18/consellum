import { useState, useEffect } from 'react';
import './Header.css';

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Our Services', href: 'services' },
  { label: 'Our Clients', href: 'clients' },
  { label: 'Get in Touch', href: 'contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">
          <span className="header__logo-mark">C</span>
          <span className="header__logo-text">Consellum</span>
        </div>
        <nav className="header__nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className={`header__nav-link${item.href === 'contact' ? ' header__nav-link--cta' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
