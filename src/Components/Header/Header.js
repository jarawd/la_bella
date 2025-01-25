import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ProductContext } from '../../utils/context';
import logo from '../../images/logo.png';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const { dropMenu, setDropMenu, setGoUp } = useContext(ProductContext);

  const handleAbout = () => {
    setDropMenu(false);
    setGoUp(false);
  };

  const handleProducts = () => {
    setDropMenu(false);
    setGoUp(true);
  };

  const handleBranches = () => {
    setDropMenu(false);
    setGoUp(true);
  };

  return (
    <div className="header">
      <div className="header__menu-container">
        <img
          className="header__logo"
          src={logo}
          alt="Logo de Quesadillas La bella"
        />
        {!dropMenu ? (
          <IoMenu
            onClick={() => setDropMenu(!dropMenu)}
            className="header__menu-icon"
          />
        ) : (
          <IoClose
            onClick={() => setDropMenu(!dropMenu)}
            className="header__menu-icon"
          />
        )}

        <nav className={`header__menu${dropMenu ? ' active' : ''}`}>
          <li
            onClick={handleProducts}
            className="header__menu-item"
          >
            <HashLink
              to="#products"
              className="header__menu-link"
            >
              Variedades
            </HashLink>
          </li>
          <li
            onClick={handleBranches}
            className="header__menu-item"
          >
            <HashLink
              to="#branches"
              className="header__menu-link"
            >
              Sucursales
            </HashLink>
          </li>
          <li
            onClick={handleAbout}
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
