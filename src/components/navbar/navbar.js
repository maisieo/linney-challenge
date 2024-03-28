// Navbar.js

import React, { useState } from "react";
import "./navbar.css";

let Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  let toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  let toggleClass = isOpen ? "navbar__toggle open" : "navbar__toggle";

  return (
    <nav className="navbar">
      <div className={toggleClass} id="navbarToggle" onClick={toggleNavbar}>
        <div className="navbar__line"></div>
        <div className="navbar__line"></div>
        <div className="navbar__line"></div>
      </div>
      <p className="navbar__paragraph">Test</p>
      <div className="navbar__nav-items">
        <ul className="navbar__nav-links">
          <li className="navbar__nav-item">
            <a href="/" className="navbar__link">
              Features
            </a>
          </li>
          <li className="navbar__nav-item">
            <a href="/" className="navbar__link">
              Edge Network
            </a>
          </li>
          <li className="navbar__nav-item">
            <a href="/" className="navbar__link">
              Pricing
            </a>
          </li>
        </ul>
        <button className="navbar__sign-up-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
