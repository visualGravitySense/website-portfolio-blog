import React from "react";
import "./HeroSection.css";


const Hero = () => {
  return (
    <section className="hero hero-creative" id="hero">
      {/* Декоративный фон  */}
      <div className="hero-glitch"></div>
      <div className="hero-noise"></div>

      <div className="hero-content">
        <h1 className="hero-title">Создаю хаос,</h1>
          <h1 className="hero-title">чтобы <span className="highlight">упорядочить мир</span></h1>
        <p className="hero-subtitle">
          Дизайн без правил - моя стихия! Здесь хаос находит порядок.
          <br /> Ваши идеи + мой креатив = прорывной результат.
        </p>
        <a href="mailto:dmitri.gornakov@gmail.com?subject=Начать работать&body=Здравствуйте!"><button className="cta-button">
          Начать работать
          </button></a>
        
      </div>

      
    </section>
  );
};

export default Hero;
