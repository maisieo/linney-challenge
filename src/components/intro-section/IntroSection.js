// IntroSection.js

import React from "react";
import "./IntroSection.css";
import IntroContent from "./IntroContent";
import SignUpForm from "./SignUpForm";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
