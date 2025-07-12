import React, { useState, useEffect } from 'react';
import { FaRegMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';
import GooeyNav from './GooeyNav';

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

  const items = [
    { label: "Início", href: "#home" },
    { label: "Sobre Mim", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav className="navbar-lateral">
      <div className="navbar-logo">
        <span className="logo-icon">GS</span>
      </div>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
      <div className="navbar-footer">
        <button 
          className={`navbar-footer-btn theme-toggle-btn ${theme}`}
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {theme === 'dark' ? <FaRegMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;