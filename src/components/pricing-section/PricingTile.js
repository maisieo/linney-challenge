// PricingTile.js

import React from "react";

let PricingTile = ({ price, plan, details }) => {
  return (
    <div className="pricing-tile">
      <h2 className="pricing-tile__plan">{plan}</h2>
      <p className="pricing-tile__price">{price}</p>
      <ul className="pricing-tile__details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingTile;
