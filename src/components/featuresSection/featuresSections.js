// FeaturesSection.js

import React from "react";
import FeatureTile from ".../featureTile/FeatureTile"; // Make sure to use correct casing
import "./featuresSection.css";

let FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-section__top">
        <h2 className="features-section__title">Features</h2>
        <p className="features-section__description">Features description.</p>
      </div>
      <div className="features-section__cards">
        <FeatureTile 
          title="Title" 
          description="Description 1" 
          imageUrl="" 
        />
        <FeatureTile
          title="Title" 
          description="Description 2" 
          imageUrl="" 
        />
        <FeatureTile 
          title="Title" 
          description="Description 3" 
          imageUrl="" 
        />
        <FeatureTile 
          title="Title" 
          description="Description 3" 
          imageUrl="" 
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
