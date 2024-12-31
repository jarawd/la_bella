import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import { ProductContext } from '../../utils/context';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropMenu, setDropMenu] = useState(false);

  const { goToProducts, setProductsActive, goToBranches } =
    useContext(ProductContext);

  const handleMenu = () => {
    setDropMenu(!dropMenu);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const handleProducts = () => {
    setProductsActive(true);
    if (goToProducts.current) {
      goToProducts.current.scrollIntoView({ behavior: 'smooth' });
      handleMenu();
    }
  };

  const handleBranches = () => {
    if (goToBranches.current) {
      goToBranches.current.scrollIntoView({ behavior: 'smooth' });
      handleMenu();
    }
  };

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
            <Link
              to="/"
              onClick={handleMenu}
              className="header__menu-link"
            >
              Inicio
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              onClick={handleBranches}
              to="/branches"
              className="header__menu-link"
            >
              Sucursales
            </Link>
          </li>
          <li
            onClick={handleProducts}
            className="header__menu-item"
          >
            <Link
              to="/products"
              className="header__menu-link"
            >
              Variedades
            </Link>
          </li>
          <li
            onClick={handleMenu}
            className="header__menu-item"
          >
            <Link
              to="/about-us"
              className="header__menu-link"
            >
              Nosotros
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
}
