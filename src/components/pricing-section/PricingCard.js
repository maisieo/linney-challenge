// PricingCard.js

import React from "react";

let PricingCard = ({ price, plan, details }) => {
  return (
    <div className="pricing-card">
      <h2 className="pricing-card__plan">{plan}</h2>
      <p className="pricing-card__price">{price}</p>
      <ul className="pricing-card__details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
