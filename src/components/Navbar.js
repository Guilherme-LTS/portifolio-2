import React from 'react';
import { FaUser, FaTools, FaGift, FaCode, FaCertificate, FaTrophy, FaPhone, FaRegMoon } from 'react-icons/fa';
import './Navbar.css';
import GooeyNav from './GooeyNav';

function Navbar() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar-lateral">
      <div className="navbar-logo">
        {/* Substitua pelo seu logo real se quiser */}
        <span className="logo-icon">L7</span>
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
        <button className="navbar-footer-btn">
          <FaRegMoon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;