// FeaturesSection.js

import React from "react";
import FeatureTile from ".../featureTile/featureTile"
import "./featuresSection.css";

let FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="top-section">
        <h2>Features</h2>
        <p>Features description.</p>
      </div>
      <div className="feature-cards">
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
