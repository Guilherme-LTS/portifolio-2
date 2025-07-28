import React, { useState, useEffect } from 'react';
import { FaRegMoon, FaSun, FaTrophy } from 'react-icons/fa';
import { FiUser, FiPhone, FiBriefcase, FiCode, FiTool } from 'react-icons/fi';
import { PiCertificateLight } from 'react-icons/pi';
import './Navbar.css';

const menuItems = [
  { label: 'Sobre mim', href: '#home', icon: <FiUser /> },
  { label: 'O que eu faço', href: '#oquefaco', icon: <FiTool /> },
  { label: 'Soft Skills', href: '#softskills', icon: <FaTrophy /> },
  { label: 'Experiência', href: '#experiencia', icon: <FiBriefcase /> },
  { label: 'Projetos', href: '#projetos', icon: <FiCode /> },
  { label: 'Contato', href: '#contato', icon: <FiPhone /> },
];

function Navbar() {
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
              <span className="menu-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <button 
        className={`theme-toggle-btn-col ${theme}`}
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      >
        {theme === 'dark' ? <FaRegMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
      </button>
    </nav>
  );
}

export default Navbar;