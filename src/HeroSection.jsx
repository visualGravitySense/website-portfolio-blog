import React from "react";
import "./HeroSection.css";
import star1 from './assets/star-1.png';
import logodigo2 from './assets/logo-digo-2.png';
import computer1 from './assets/computer-1.png';
import trophy1 from './assets/trophy-1.png';
import profile1 from './assets/profile-1.png';
import contact1 from './assets/contact-1.png';
import picture1 from './assets/picture-1.png';

const Hero = () => {
  return (
    <section className="hero hero-creative" id="hero">
      {/* Декоративный фон  */}
      <div className="hero-glitch"></div>
      <div className="hero-noise"></div>

      {/* Анимированные элементы */}
      <img
        src={trophy1}
        alt="Trophy"
        className="floating-item trophy"
      />
      <img
        src={profile1}
        alt="Profile"
        className="floating-item profile"
      />
      <img
        src={logodigo2}
        alt="Picture"
        className="floating-item picture"
      />
      <img
        src={contact1}
        alt="Contact"
        className="floating-item contact"
      />
      {/* <img
        src={computer1}
        alt="Computer"
        className="floating-item computer"
      /> */}
      
      {/* <img
        src={logodigo2}
        alt="Logo"
        className="floating-item logo" 
      />*/}

      {/* Анимированные звёзды */}
      <img
        src={star1}
        alt="star"
        className="floating-star star-1"
      />
      <img
        src={star1}
        alt="star"
        className="floating-star star-2"
      />
      <img
        src={star1}
        alt="star"
        className="floating-star star-3"
      />

    
      

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
