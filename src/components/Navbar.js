import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-lateral">
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;