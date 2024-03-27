/*FeatureCard.js*/

import React from "react";
import "./featureCard.css";

let FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="feature-card">
      <img src={imageUrl} alt={title} className="feature-card__image" />
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
};

export default FeatureCard;
