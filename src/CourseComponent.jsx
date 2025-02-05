import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Popup.css";

import './Component.css';
import crypto1 from './assets/crypto-startup-1.jpg';
import crypto2 from './assets/crypto-startup-2.jpg';
import crypto3 from './assets/crypto-startup-3.jpg';



const infoData = [
  {
    imageSrc: crypto1, // Путь к изображению
    title: "Build your own crypto startup from scratch!",
    description: `
            Go from idea to first user. Find out how I created Crypto Wise in 30 days.

    `,
    secondaryTitle: "What awaits you?",
    secondaryDescription: `
      Mastering the work with cryptocurrency API. 
      Developing a real startup from scratch. 
      Implementation of gamification and data visualization. 
      Ready-made tools and templates.
    `
  },
  // {
  //   imageSrc: "", // Путь к изображению
  //   title: "This course is for you if...",
  //   description: `
  //     You want to launch your startup. You are passionate about cryptocurrencies and blockchain. You want to learn how to work with a modern technology stack. You are looking for ways to monetize your projects.
  //   `,
  //   secondaryTitle: "Training Program",
  //   secondaryDescription: `
  //     Module 1: Market research and idea development. Module 2: Creating an MVP using CoinPaprika API. Module 3: Implementing gamification and data visualization. Module 4: Launch, promotion and monetization.

  //   `
  // },
  // {
  //   imageSrc: "", // Путь к изображению
  //   title: "",
  //   description: `

  //   `,
  //   secondaryTitle: "",
  //   secondaryDescription: `
      
  //   `
  // }
];

const classesData = [
  {
    imageSrc1: crypto3, // Путь к изображению
    title: "This course is for you if...",
    description: `
      You want to launch your startup. You are passionate about cryptocurrencies and blockchain. You want to learn how to work with a modern technology stack. You are looking for ways to monetize your projects.
    `,
    secondaryTitle: "Training Program",
    secondaryDescription: `
      Module 1: Market research and idea development. Module 2: Creating an MVP using CoinPaprika API. Module 3: Implementing gamification and data visualization. Module 4: Launch, promotion and monetization.
      `
  },
  // {
  //   imageSrc1: "", // Путь к изображению
  //   title: "Gamification of Products",
  //   description: `
  //     Participants will learn how to implement game elements in an educational or information product to increase user engagement.
  //   `,
  //   secondaryTitle: "",
  //   secondaryDescription: `
      
  //   `
  // },
  // {
  //   imageSrc1: "", // Путь к изображению
  //   title: "Project Management",
  //   description: `
  //     Planning.
  //     Brand creation.
  //     Launch and attracting the first users.    `,
  //   secondaryTitle: "Working with a modern technology stack",
  //   secondaryDescription: `
  //     React.js for front-end.
  //     Node.js for API.
  //     Integrating Firebase or other cloud technologies.
  //   `
  // }
];

const cardsData = [
  // {
  //   imageSrc2: "", // Путь к изображению
  //   title: "Graphic Design | UI/UX",
  //   description: `
  //     Free case design for real-world tasks. We will teach you how to create aesthetic interfaces and design projects for startups.

  //   `,
  //   secondaryTitle: "Frontend | React",
  //   secondaryDescription: `
  //     Modern UI development. Learn React to build interactive applications.
  //   `
  // },
  
  // {
  //   imageSrc2: "", // Путь к изображению
  //   title: "Backend | Django | JS",
  //   description: `
  //     Reliable systems based on Django. Developing the server side for complex projects.

  //   `,
  //   secondaryTitle: "IT: Fullstack",
  //   secondaryDescription: `
  //     Comprehensive approach to development. Combining front-end and back-end in one project.
  //   `
  // },

  // {
  //   imageSrc2: crypto3, // Путь к изображению
  //   title: "",
  //   description: `
  //     Implemented design case
  //   `,
  //   secondaryTitle: "",
  //   secondaryDescription: `
      
  //   `
  // },

  {
    imageSrc2: crypto2, // Путь к изображению
    title: "Bonuses",
    description: `
      Access to a private chat. Ready-made code templates. Checklist for launching a startup.
    `,
    secondaryTitle: "Guarantee",
    secondaryDescription: `
      3 free tutorials in beginning to understand if the course is suitable.
    `
  },
  {
    imageSrc2: "", // Путь к изображению
    title: "Start the path to creating your startup today!",
    description: `
      Don't miss the opportunity to create your successful project from scratch.
    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  },
  
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
                My <span className="highlight">creative</span> Classes 
             </h2>
        </div>
      
      <div className="content-wrapper">
        {/* Левый блок */}
        
        <div className="left-block">
          <div className="section-header">
          {/* <h2>О проекте</h2> */}
          <h3>
          About this <span className="highlight">course</span>
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
        
          Who is this <span className="highlight"> course for?</span>
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
        Bonuses and <span className="highlight">guarantees</span>
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
        
        {/* <div className="right-block">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="card">
              
              <img src="path-to-icon.png" alt="e-Coupon" />
              <p>e-Coupon</p>
              <p className="description">
                Front-end: React, Vue.js
                Back-end: Node.js, Python (Django, Flask)
                PostgreSQL, MongoDB
                AWS, GCP, Azure
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CourseComponent;
