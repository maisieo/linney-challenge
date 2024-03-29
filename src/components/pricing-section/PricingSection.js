// PricingSection.js

import React from "react";
import PricingCard from "./PricingCard";
import "./PricingSection.css";

let PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-section__header">
        <h1 className="pricing-section__title">Pricing</h1>
        <p className="pricing-section__description">
        Cut your cloud bills in half with bundled extras like DDoS Protection, cloud firewalls, and generous transfer.
        </p>
      </div>
      <div className="pricing-section__cards">
        <PricingCard 
          price={<><span>$9</span>/mo</>}
          plan="Standard"
          details={[
            "10 GB of space",
            "Unlimited Traffic",
            "Forum Access",
            "Support at $25/hour"
          ]}
        />
        <PricingCard 
          price={<><span>$49</span>/mo</>}
          plan="Professional"
          details={[
            "30 GB of space",
            "Unlimited Traffic",
            "Forum Access",
            "Support at $25/hour"
          ]}
        />
        <PricingCard 
          price={<><span>$159</span>/mo</>}
          plan="Enterprise"
          details={[
            "50 GB of space",
            "Unlimited Traffic",
            "Forum Access",
            "Support at $25/hour"
          ]}
        />
      </div>
    </section>
  );
};

export default PricingSection;
