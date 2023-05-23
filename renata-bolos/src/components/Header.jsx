import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`header ${menuOpen ? 'open' : ''}`}>
      <div className='logo-name'>
        <h5>Renata Bolos 🌸</h5>
      </div>
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#bolos">Bolos</a>
        <a href="#contact">Contato</a>
      </div>
      <div className='menu-toggle' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
