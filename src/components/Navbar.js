import React, { useState, useEffect } from 'react';
import { FaRegMoon, FaSun, FaTrophy } from 'react-icons/fa';
import { FiUser, FiPhone, FiBriefcase, FiCode, FiTool } from 'react-icons/fi';
import { PiCertificateLight } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';
import { FaFlagUsa } from 'react-icons/fa';
import './Navbar.css';

const menuItems = [
  { label: 'about', href: '#home', icon: <FiUser /> },
  { label: 'oquefaco', href: '#oquefaco', icon: <FiTool /> },
  { label: 'softskills', href: '#softskills', icon: <FaTrophy /> },
  { label: 'experiencia', href: '#experiencia', icon: <FiBriefcase /> },
  { label: 'projects', href: '#projetos', icon: <FiCode /> },
  { label: 'contact', href: '#contato', icon: <FiPhone /> },
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar-col">
      <div className="navbar-logo-area">
        <span className="logo-icon">GS</span>
      </div>
      <ul className="navbar-menu-col">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={e => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
                e.currentTarget.blur();
              }}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{t(item.label)}</span>
            </a>
          </li>
        ))}
      
      </ul>
      <div className="lang-toggle-group">
        <button
          className={`lang-toggle-btn${i18n.language === 'en' ? ' active' : ''}`}
          onClick={() => i18n.changeLanguage('en')}
          aria-label="Switch to English"
        >
          <FaFlagUsa className="lang-icon" />
        </button>
        <button
          className={`lang-toggle-btn${i18n.language === 'pt' ? ' active' : ''}`}
          onClick={() => i18n.changeLanguage('pt')}
          aria-label="Mudar para português"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Português" className="lang-icon" style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }} />
        </button>
      </div>
      
    </nav>
  );
}

export default Navbar;