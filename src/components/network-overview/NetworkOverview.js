// NetworkOverview.js

import React from "react";
import "./NetworkOverview.css";

const NetworkOverview = () => {
  return (
    <section className="network-overview">
      <div className="network-overview__content">
        <h1 className="network-overview__title">Edge Network</h1>
        <p className="network-overview__description">
          Scale your business on the most distributed compute, security, and
          delivery platform — from cloud to edge. New core compute regions
          launched. <a href="link_to_learn_more_page">Learn more</a>.
        </p>
      </div>
      <div className="network-overview__map">
        <img
          src="/imgs/network-map.PNG"
          alt="Edge Network Map"
          className="network-overview__image"
        />
      </div>
    </section>
  );
};

export default NetworkOverview;
