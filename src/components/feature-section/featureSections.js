// FeatureSection.js

import React from "react";
import FeatureTile from "./featureTile.js"
import "./featureSection.css";

let FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-section__top">
        <h2 className="feature-section__title">Feature</h2>
        <p className="feature-section__description">Feature description.</p>
      </div>
      <div className="feature-section__cards">
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

export default FeatureSection;
