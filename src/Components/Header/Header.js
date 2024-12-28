import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropMenu, setDropMenu] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  function handleMenu() {
    setDropMenu(!dropMenu);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${scrollPosition >= 554 && 'header-shadow'}`}>
      <div className="header__menu-container">
        <img
          className="header__logo"
          src={logo}
          alt="Logo de Quesadillas La bella"
        />
        {!dropMenu ? (
          <FaChevronDown
            onClick={handleMenu}
            className="header__chevron header__chevron_down"
          />
        ) : (
          <FaChevronUp
            onClick={handleMenu}
            className="header__chevron header__chevron_up"
          />
        )}
        <nav className={`header__menu${dropMenu ? ' active' : ''}`}>
          <li className="header__menu-item">
            <Link className="header__menu-link">Inicio</Link>
          </li>
          <li className="header__menu-item">
            <Link className="header__menu-link">Variedades</Link>
          </li>
          <li className="header__menu-item">
            <Link className="header__menu-link">Nosotros</Link>
          </li>
        </nav>
      </div>
    </div>
  );
}
