// IntroSection.js

import React from "react";
import IntroContent from "./IntroContent";
import SignUpForm from "./SignUpForm";

let IntroSection = () => {
  return (
    <section className="intro-section">
      <IntroContent />
      <SignUpForm />
    </section>
  );
};

export default IntroSection;