// Footer.js

import React from "react";
import "./footer.css";

let Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__copyright">Copyright 2024</p>
      </div>
      <div className="footer__right">
        <ul className="footer__links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/cookie-policy">Cookies</a></li>
          <li><a href="/accessibility">Accessibility</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
