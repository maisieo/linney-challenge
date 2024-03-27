// CallToActionSection.js

import React from "react";
import "./callToActionSection.css";

let CallToActionSection = () => {
  return (
    <section className="call-to-action-section">
      <h2 className="call-to-action-section__title">Ready to get started?</h2>
      <p className="call-to-action-section__description">Set up your free account today or contact a sales consultant to learn more.</p>
      <div className="call-to-action-section__options">
        <button className="call-to-action-section__button">Create Account</button>
        <button className="call-to-action-section__button">Contact Sales</button>
      </div>
    </section>
  );
};

export default CallToActionSection;
