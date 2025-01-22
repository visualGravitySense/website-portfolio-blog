import React from "react";
import "./HeroSection.css";


const Hero = () => {
  return (
    <section className="hero hero-creative" id="hero">
      {/* Декоративный фон  */}
      <div className="hero-glitch"></div>
      <div className="hero-noise"></div>

      <div className="hero-content">
        <h1 className="hero-title">I create chaos</h1>
          <h1 className="hero-title">to organize <span className="highlight">the world</span></h1>
        <p className="hero-subtitle">
          Design without rules is my element! Here chaos finds order.
          <br /> Your ideas + my creativity = breakthrough result.
        </p>
        <a href="mailto:dmitri.gornakov@gmail.com?subject=Начать работать&body=Здравствуйте!"><button className="cta-button">
          Start working
          </button></a>
        
      </div>

      
    </section>
  );
};

export default Hero;
