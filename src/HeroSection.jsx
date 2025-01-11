import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Создаю <span>хаос</span>, чтобы упорядочить мир
      </h1>
      <div className="hero-background"></div>
    </section>
  );
};

export default HeroSection;
