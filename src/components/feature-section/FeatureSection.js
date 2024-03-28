// FeatureSection.js

import React from "react";
import FeatureCard from "./FeatureCard.js"
import "./FeatureSection.css";

let FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-section__top">
        <h1 className="feature-section__title">Features</h1>
        <p className="feature-section__description">From edge locations world wide, to unparalleled security and DDOS protection, we’ve got you covered. </p>
      </div>
      <div className="feature-section__cards">
        <FeatureCard 
          title="EdgeNetwork" 
          description="Discover our industry leading edge network, with over 300 edge nodes scattered around the globe.
Give your customers the best performance in every corner of the world." 
          imageUrl="/imgs/edge-network-img.PNG" 
        />
        <FeatureCard
          title="Security" 
          description="Stay safe from threats without slowing down.
          SuperNet surrounds and protects your entire ecosystem — clouds, apps, APIs, and users." 
          imageUrl="/imgs/security-img.PNG" 
        />
        <FeatureCard 
          title="DDoS Protection" 
          description="Highly rated web, application & network DDoS protection. Keeping bots and malicious users at bay." 
          imageUrl="imgs/DDOS-img.PNG" 
        />
        <FeatureCard 
          title="Backups" 
          description="Fully managed automatic daily, weekly, and biweekly backups of your Compute Instances. Have peace of mind knowing that your data is always safe." 
          imageUrl="/imgs/backups.img.PNG" 
        />
      </div>
    </section>
  );
};

export default FeatureSection;
