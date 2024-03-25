// Navbar.js

import React from "react";

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
          <li className="navbar__nav-item">
            <a href="/" className="navbar__link">
              Prcing
            </a>
          </li>
        </ul>
        <button className="navbar__sign-up-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
