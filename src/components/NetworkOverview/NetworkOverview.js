// NetworkOverview.js

import React from "react";
// import "./networkOverview.css";

const NetworkOverview = () => {
  return (
    <section className="network-overview">
      <div className="network-overview__content">
        <h2 className="network-overview__title">Edge Network</h2>
        <p className="network-overview__description">
          Scale your business on the most distributed compute, security, and
          delivery platform — from cloud to edge. New core compute regions
          launched. Learn more.
        </p>
      </div>
      <div className="network-overview__map">
        <img
          src="path_to_network_map_image.jpg"
          alt="Edge Network Map"
          className="network-overview__image"
        />
      </div>
    </section>
  );
};

export default NetworkOverview;
