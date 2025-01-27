import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Popup.css";

import "./HeroSection.css";
import star1 from './assets/star-1.png';
import logodigo2 from './assets/logo-digo-2.png';
import computer1 from './assets/computer-1.png';
import trophy1 from './assets/trophy-1.png';
import profile1 from './assets/profile-1.png';
import contact1 from './assets/contact-1.png';
import picture1 from './assets/picture-1.png';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    phone: "",
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

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Замените на ваш Service ID
        "YOUR_TEMPLATE_ID", // Замените на ваш Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Замените на ваш Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            company: "",
            industry: "",
            phone: "",
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

// const Hero = () => {
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
        <h1 className="hero-title">I create chaos to <br/>organize <span className="highlight">the world</span></h1>
        <p className="hero-subtitle">
          Design without rules is my element! Here chaos finds order.
           Your ideas + my creativity = breakthrough result.
        </p>
        {/* <a href="mailto:dmitri.gornakov@gmail.com?subject=Начать работать&body=Здравствуйте!"><button className="cta-button">
          Start working
          </button></a> */}

        {/* Кнопка для открытия Popup */}
        <button className="cta-button" onClick={togglePopup}>
          Start working
        </button>

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
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="industry"
                  placeholder="Field of activity"
                  value={formData.industry}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
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
                  placeholder="Brief description of the task"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <button type="submit" className="submit-button">Send</button>
              </form>
              <button className="close-button" onClick={togglePopup}>
                Close
              </button>
            </div>
          </div>
        )}
        
      </div>

      
    </section>
  );
};

export default Hero;
