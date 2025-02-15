import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Popup.css";

import './Component.css';
import crypto1 from './assets/analyse-1.png';
import crypto2 from './assets/front-1.png';
import crypto3 from './assets/interface-1.png';



const infoData = [
  {
    imageSrc: crypto1, // Путь к изображению
    title: "Data Analysis using Python and SQL",
    description: `
            Go from idea to first user. Find out how I created Crypto Wise in 30 days.

    `,
    secondaryTitle: "What awaits you?",
    secondaryDescription: `
      In this 15-week course, all aspects of the data analyst profession are covered. The theoretical part of the course provides the necessary skills in Python/MySQL, as well as the required amount of mathematics.
The practical part of the course is based on the analysis of real company data.
    `
  },
  
];

const classesData = [
  {
    imageSrc1: crypto2, // Путь к изображению
    title: "Front-end development based on React.js - an intensive course for beginners.",
    description: `
      As of today, React is the most popular library for frontend application development. This 126-hour course covers the entire tech stack needed for a Junior frontend developer:
    `,
    secondaryTitle: "Training Program",
    secondaryDescription: `
      Static web design with HTML/CSS, Responsive design using Bootstrap 5, Fundamentals of JavaScript, Working with React.js
      `
  },
  
];

const cardsData = [
  

  {
    imageSrc2: crypto3, // Путь к изображению
    title: "Prototyping in Figma and UX/UI design - intensive course",
    description: `
      The main goal of the course is to acquire theoretical knowledge in UX (User Experience) and basic practical skills in UI (User Interface) essential for designing websites and user interfaces.
    `,
    secondaryTitle: "",
    secondaryDescription: `
      The course is designed for those who want to start a career in the IT field without programming skills and learn to create website and user interface designs using Figma..
    `
  },
  // {
  //   imageSrc2: "", // Путь к изображению
  //   title: "Start the path to creating your startup today!",
  //   description: `
  //     Don't miss the opportunity to create your successful project from scratch.
  //   `,
  //   secondaryTitle: "",
  //   secondaryDescription: `
      
  //   `
  // },
  
];



const CourseComponent = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "",
    // company: "",
    // industry: "",
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

  return (
    <div className="complex-component" id="lessons">
      
      <div className="section-header">
            <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            The best courses from <span className="highlight">Gamma Intelligence </span>– upgrade your IT and design skills! 
             </h2>
        </div>
      
      <div className="content-wrapper">
        {/* Левый блок */}
        
        <div className="left-block">
          <div className="section-header">
          {/* <h2>О проекте</h2> */}
          <h3>
          Technical <span className="highlight">course</span>
          </h3>
          
        </div>
        
          {infoData.map((card, i) => (
              <div key={i} className="card">
                {card.imageSrc && (
                  <img src={card.imageSrc} alt={card.title} className="card-image" />
                )}
                <h3 className="title">{card.title}</h3>
                <p className="description">{card.description}</p>
                <h4 className="title">{card.secondaryTitle}</h4>
                <p className="description">{card.secondaryDescription}</p>

                
              </div>
            ))}

            <div className="buttons">
                <button className="btn-purple" onClick={togglePopup}>
                Book your course
                </button>
              </div>
            
        </div>

        {/* Центральный блок */}
        <div className="center-block">
        <div className="section-header">
        <h3>
        
        At the intersection of design <span className="highlight">and programming</span>
          </h3></div>
          {classesData.map((card, i) => (
            <div key={i} className="card">
              {card.imageSrc1 && (
                  <img src={card.imageSrc1} alt={card.title} className="card-image" />
                )}
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
              <h4 className="title">{card.secondaryTitle}</h4>
              <p className="description">{card.secondaryDescription}</p>

              
            </div>

            
          ))}

            <div className="buttons">
                <button className="btn-purple" onClick={togglePopup}>
                Book your course
                </button>
              </div>
          

        </div>

        

        {/* Правый блок */}
        
        <div className="right-block">
          <div className="section-header">  
        <h3 className="">
        Creative and <span className="highlight">technical</span>
          </h3></div>
          {cardsData.map((card, i) => (
            <div key={i} className="card">
              {card.imageSrc2 && (
                  <img src={card.imageSrc2} alt={card.title} className="card-image" />
                )}
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
              <h4 className="title">{card.secondaryTitle}</h4>
              <p className="description">{card.secondaryDescription}</p>

              
            </div>
          ))}

            {/* <div className="buttons">
                <a href="/landing"><button className="btn-purple">Select a course</button></a>
              </div> */}

              {/* Кнопка для открытия Popup */}
              <div className="buttons">
                <button className="btn-purple" onClick={togglePopup}>
                Book your course
                </button>
              </div>
              

              {isOpen && (
                <div className="popup-overlay">
                <div className="popup-content">
                  <button className="close-button" onClick={togglePopup}>✖</button>
                  <h2>Leave a request for a course</h2>
                  <p>We gather a group of 10-15 people and launch the course immediately. You can register for a course by leaving a request and a manager will contact you within 24 hours.</p>
                  
                  <form id="request-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your name (required)" onChange={handleInputChange} value={formData.name} required />
                    {/* <input type="text" name="company" placeholder="Название компании" /> */}
                    {/* <input type="text" name="industry" placeholder="Сфера деятельности" /> */}
                    <input type="tel" name="phone" placeholder="Phone (optional)" onChange={handleInputChange} value={formData.phone} />
                    <input type="email" name="email" placeholder="E-mail (required)" onChange={handleInputChange} value={formData.email} required />
                    <textarea name="message" placeholder="Comments (optional)" value={formData.message} onChange={handleInputChange} ></textarea>
                    {/* <label>
                      Если нужно, прикрепите файл:
                      <input type="file" name="attachment" />
                    </label> */}
                    <button type="submit" className="submit-button">Send a request</button>
                  </form>
                  <p className="privacy-note">
                    By clicking the "Send a request" button, you agree to the 
                    <a href="" target="_blank"> processing of your personal data</a>.
                  </p>
                </div>
              
              </div>
              )}

        </div>
        
        
      </div>
    </div>
  );
};

export default CourseComponent;
