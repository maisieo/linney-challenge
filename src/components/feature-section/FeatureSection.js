// FeatureSection.js

import React from "react";
import FeatureCard from "./FeatureCard.js"
import "./FeatureSection.css";

let FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-section__top">
        <h2 className="feature-section__title">Feature</h2>
        <p className="feature-section__description">Feature description</p>
      </div>
      <div className="feature-section__cards">
        <FeatureCard 
          title="Title" 
          description="Description 1" 
          imageUrl="" 
        />
        <FeatureCard
          title="Title" 
          description="Description 2" 
          imageUrl="" 
        />
        <FeatureCard 
          title="Title" 
          description="Description 3" 
          imageUrl="" 
        />
        <FeatureCard 
          title="Title" 
          description="Description 3" 
          imageUrl="" 
        />
      </div>
    </section>
  );
};

export default FeatureSection;
