// IntroContent.js

import React from "react";
import "./IntroContent.css";


let IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="intro-content__wrapper">
      <h1 className="intro-content__title">Cloud Computing Developers Trust</h1>
      <p className="intro-content__description">
        Build, run, and secure your cloud workloads on{" "}
        <span className="bold-text">SuperNet Connected Cloud</span>, a massively
        distributed edge and cloud platform.{" "}
        <a href="/signup" className="link">
          Sign up today
        </a>{" "}
        or{" "}
        <a href="/contact" className="link">
          contact us
        </a>{" "}
        to learn more.
      </p>
      </div>
    </div>
  );
};

export default IntroContent;
