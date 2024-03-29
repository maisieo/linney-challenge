// PricingCard.js

import React from "react";
import "./PricingCard.css";

let PricingCard = ({ price, plan, details }) => {
  return (
    <div className="pricing-card">
      <div className="pricing-card__top-section">
      <h4 className="pricing-card__price">{price}</h4>
      <h4 className="pricing-card__plan">{plan}</h4>
      </div>
      <img className="pricing-card__image" src="/imgs/wave-bg.PNG" alt="wave image" />
      <ul className="pricing-card__details">
        {details.map((detail, index) => (
          <li key={index}>
            <p>{detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
