// IntroSection.js

import React from "react";
import "./IntroSection.css";
import IntroContent from "./IntroContent";
import SignUpForm from "./SignUpForm";

let IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-section__wrapper">
      <IntroContent />
      <SignUpForm />
      </div>
    </section>
  );
};

export default IntroSection;
