import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Popup.css";
import { motion } from "framer-motion";

import "./HeroSection.css";
import star1 from './assets/star-1.png';


import ReactMarkdown from "react-markdown";



const Hero = ({ title, description, subtitle, secondaryTitle, secondarySubtitle, ctaText, bgImage, showPopup = true }) => {
  const heroStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  // Опционально, стили для мобильных устройств
  const mobileHeroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "top center",
    height: "70vh",
    
  };

  // Объединяем стили в зависимости от размера экрана
  const finalHeroStyle =
  window.innerWidth <= 768 ? { ...heroStyle, ...mobileHeroStyle } : heroStyle;

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  }); 

  const togglePopup = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill in the required fields.");
      return;
    }

    emailjs
      .send(
        "service_qqu3vd9",
        "template_3w6nbgc",
        formData,
        "OOkYd6kaV2PnokJfd"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            company: "",
            
            email: "",
            message: "",
          });
          setIsOpen(false);
        },
        (error) => {
          alert("Error sending message. Try again.");
          console.error(error);
        }
      );
  };


  return (
    <section className="hero hero-creative" id="hero" style={heroStyle}>
      {/* Декоративный фон  */}
      <div className="hero-glitch"></div>
      <div className="hero-noise"></div>
      
      

      {/* Анимированные звёзды */}
      <img
        src={star1} alt="star" className="floating-star star-1"
      />
      <img
        src={star1} alt="star" className="floating-star star-2"
      />
      <img
        src={star1} alt="star" className="floating-star star-3"
      />

      <div className="hero-content">

        <motion.h1
          className=""
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-container"><h1 className="hero-title">{title}</h1></div>
          
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="markdown-container">
              <p className="hero-subtitle"><ReactMarkdown>{subtitle}</ReactMarkdown></p>
              <p className="hero-subtitle"><ReactMarkdown>{description}</ReactMarkdown></p>
            </div>
        </motion.p>
        

        {/* <p className="hero-subtitle">{description}</p> */}
        <h2 className="hero-title">{secondaryTitle}</h2>
        <p className="hero-subtitle">{secondarySubtitle}</p>

        {/* CTA Кнопка */}
        <motion.a
          href="#"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
        {showPopup && (
          <button className="cta-button" onClick={togglePopup}>
            {ctaText || "Запросить консультацию"}
          </button>
        )}
          
        </motion.a>
        
         {/* Popup */}
        {isOpen && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Request for a commercial proposal</h2>
              <p>
              We will prepare a commercial proposal for you with an estimate of cost and examples of work from your field.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company name (optional)"
                  value={formData.company}
                  onChange={handleInputChange}
                  
                />
                {/* <input
                  type="text"
                  name="industry"
                  placeholder="Field of activity"
                  value={formData.industry}
                  onChange={handleInputChange}
                /> */}

                {/* <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                /> */}

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Brief description of the task (optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <button type="submit" className="submit-button">Send</button>
              </form>
              <button className="close-button" onClick={togglePopup}>
              ✖
              </button>
            </div>
          </div>
        )}
        
      </div>

      
    </section>
  );
};

export default Hero;
