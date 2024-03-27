// PricingSection.js

import React from "react";
import PricingTile from "./PricingTile";
// import "./pricingSection.css";

let PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-section__header">
        <h1 className="pricing-section__title">Pricing</h1>
        <p className="pricing-section__description">
        Cut your cloud bills in half with bundled extras like DDoS Protection, cloud firewalls, and generous transfer.
        </p>
      </div>
      <div className="pricing-section__tiles">
        <PricingTile 
          price="$9/mo"
          plan="Standard"
          details={[
            "Feature 1",
            "Feature 2",
            "Feature 3"
          ]}
        />
        <PricingTile 
          price="$9/mo"
          plan="Standard"
          details={[
            "Feature 1",
            "Feature 2",
            "Feature 3"
          ]}
        />
        <PricingTile 
          price="$9/mo"
          plan="Standard"
          details={[
            "Feature 1",
            "Feature 2",
            "Feature 3"
          ]}
        />
      </div>
    </section>
  );
};

export default PricingSection;
