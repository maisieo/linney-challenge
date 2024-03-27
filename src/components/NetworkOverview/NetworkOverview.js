// EdgeNetworkOverview.js

import React from "react";
import "./edgeNetworkOverview.css";

const EdgeNetworkOverview = () => {
  return (
    <section className="edge-network-overview">
      <div className="edge-network-overview__content">
        <h2 className="edge-network-overview__title">Edge Network</h2>
        <p className="edge-network-overview__description">
          Brief description or introduction to the edge network.
        </p>
      </div>
      <div className="edge-network-overview__map">
        <img src="path_to_network_map_image.jpg" alt="Edge Network Map" className="edge-network-overview__image" />
      </div>
    </section>
  );
};

export default EdgeNetworkOverview;
