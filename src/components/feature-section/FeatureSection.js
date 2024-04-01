// FeatureSection.js

import React from "react";
import FeatureCard from "../feature-card/FeatureCard";
// import "./FeatureSection.css";

let FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-section__top">
        <h1 className="feature-section__title">Features</h1>
        <p className="feature-section__description">
          From edge locations world wide, to unparalleled security and DDOS
          protection, we’ve got you covered.{" "}
        </p>
      </div>
      <div className="feature-section__cards">
        <FeatureCard
          title="Edge Network"
          description={
            <>
              <span>
                Discover our industry leading edge network, with over 300 edge
                nodes scattered around the globe.
              </span>
              <br />
              <br />
              <span>
                Give your customers the best performance in every corner of the
                world.
              </span>
            </>
          }
          imageUrl="/imgs/edge-network-img.PNG"
        />
        <FeatureCard
          title="Security"
          description={
            <span>
              Stay safe from threats without slowing down.
              <br /><br/>
              SuperNet surrounds and protects your entire ecosystem — clouds,
              apps, APIs, and users.
            </span>
          }
          imageUrl="/imgs/security-img.PNG"
        />

        <FeatureCard
          title="DDoS Protection"
          description={
            <span>
              Highly rated web, application & network DDoS protection.
              <br /><br/>
              Keeping bots and malicious users at bay.
            </span>
          }
          imageUrl="/imgs/DDOS-img.PNG"
        />

        <FeatureCard
          title="Backups"
          description={
            <span>
              Fully managed automatic daily, weekly, and biweekly backups of
              your Compute Instances.
              <br /><br/>
              Have peace of mind knowing that your data is always safe.
            </span>
          }
          imageUrl="/imgs/backups-img.PNG"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
