/*FeatureTile.js*/

import React from "react";
import "./featureTile.css";

let FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="feature-tile">
      <img src={imageUrl} alt={title} className="feature-tile__image" />
      <h3 className="feature-tile__title">{title}</h3>
      <p className="feature-tile__description">{description}</p>
    </div>
  );
};

export default FeatureCard;
