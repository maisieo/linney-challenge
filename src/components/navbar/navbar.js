// Navbar.js

import React from "react";
import "./navbar.css";

let Navbar = () => {
  return (
    <nav className="navbar">
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
          <li className="navbar__navItem">
            <a href="/" className="navbar__link">
              Pricing
            </a>
          </li>
        </ul>
        <button className="navbar__signUpButton">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
