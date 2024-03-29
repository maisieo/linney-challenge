// Navbar.js

import React, { useState } from "react";
import "./navbar.css";

let Navbar = () => {
  /*Hook to manage state of navbar toggle*/
  let [isOpen, setIsOpen] = useState(false);

  /*Toggles navbar open and close states*/
  let toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  /*Determine classes for button and content based on isOpen state*/
  let toggleClass = isOpen ? "navbar__toggle open" : "navbar__toggle";
  let contentClass = isOpen ? "navbar__content open" : "navbar__content";

  return (
    <nav className="navbar">
      <div className={toggleClass} id="navbarToggle" onClick={toggleNavbar}>
        <div className="navbar__line"></div>
        <div className="navbar__line"></div>
        <div className="navbar__line"></div>
      </div>
      <div className={contentClass}>
        <h2 className="navbar__title">SuperNet</h2>
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
      </div>
    </nav>
  );
};

export default Navbar;
