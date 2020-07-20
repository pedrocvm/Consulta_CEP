/* eslint-disable */
import React from 'react';
import css from '../css.modules/header.module.css';
import logo from '../assets/images/logo.png';
import icon from '../assets/images/icon.png';

export default function Header({isOpen}) {
  return (
    <div className={`${css.headerContainer}`}>
      <nav className="nav-wrapper">
        <div className={`left ${css.logo}`}>
          <a href="/" className="brand-logo">
            <img src={logo} alt="logo.png" border="0" />
          </a>
        </div>

        <a
          href="#"
          data-target="mobile-navbar"
          className="right sidenav-trigger"
        >
          {!isOpen && <i className={`material-icons ${css.menuIcon}`}>menu</i>}
        </a>

        <ul
          id="nav-mobile"
          className={`right hide-on-med-and-down ${css.ulMenu}`}
        >
          <li className="nav-item">
            <a className={`nav-link ${css.navLink}`}>BUSCAR CEP</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${css.navLink}`}>CSS</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${css.navLink}`}>COMPONENTES</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${css.navLink}`}>JAVASCRIPT</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${css.navLink}`}>HTML</a>
          </li>
        </ul>
      </nav>

      <ul id="mobile-navbar" className={`sidenav ${css.mobileSidebar}`}>
        <div className={css.mobileBar}>
          <img src={icon}/>
        </div>
        <li>
          <a className={`nav-link ${css.navLinkMobile}`}>
            BUSCAR CEP
          </a>
        </li>
        <li>
          <a className={`nav-link ${css.navLinkMobile}`}>
            CSS
          </a>
        </li>
        <li>
          <a className={`nav-link ${css.navLinkMobile}`}>
            COMPONENTES
          </a>
        </li>
        <li>
          <a className={`nav-link ${css.navLinkMobile}`}>
            JAVASCRIPT
          </a>
        </li>
        <li>
          <a className={`nav-link ${css.navLinkMobile}`}>
            HTML
          </a>
        </li>
      </ul>
    </div>
  );
}
