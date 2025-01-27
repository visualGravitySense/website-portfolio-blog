import React from 'react';
import './Component.css';
import crypto1 from './assets/crypto-startup-1.jpg';
import crypto2 from './assets/crypto-startup-2.jpg';
import crypto3 from './assets/crypto-startup-3.jpg';



const infoData = [
  {
    imageSrc: crypto1, // Путь к изображению
    title: "Crypto Wise: Creating the Future of Technology!",
    description: `
            A Unique Course from a Creative Technologist: From Design to Machine Learning.

    `,
    secondaryTitle: "",
    secondaryDescription: `
      A Creative Approach to Teaching Modern Technologies: From Graphic Design to Python and Fullstack Development.
    `
  },
  {
    imageSrc: "", // Путь к изображению
    title: "Course platform. Choice of platform.",
    description: `
      Thinkific, Teachable or Podia — ready-made solutions for course hosting.
      In-house development: Developing a platform on React or Vue.js with back-end integration via Node.js or Django.
    `,
    secondaryTitle: "Front-end technologies",
    secondaryDescription: `
      React.js — the basis for creating an interactive user interface.
      Vite — for quick project assembly.
      Bootstrap / Tailwind CSS — for creating responsive design.
      GraphQL or REST API — for working with data.
    `
  },
  {
    imageSrc: "", // Путь к изображению
    title: "Back-end technologies",
    description: `
      Node.js + Express.js — for creating an API for the course service.
      MongoDB or PostgreSQL — for storing user data, course progress, and materials.
      Auth0 — for authorization and data protection.
    `,
    secondaryTitle: "Additional libraries and integrations",
    secondaryDescription: `
      CoinPaprika API — for demonstrating how to work with cryptocurrency data.
      Chart.js or D3.js — for visualizing cryptocurrency data.
      Lottie.js — for adding animations (e.g. gamified elements).
      Firebase — for sending notifications, storing files, or analytics.
    `
  }
];

const classesData = [
  {
    title: "API Training",
    description: `
      Participants will learn how to integrate the CoinPaprika API to obtain cryptocurrency data, process this data, and visualize it.
    `,
    secondaryTitle: "MVP Development",
    secondaryDescription: `
      Create a minimum viable product: from an idea to implementing the first functions (e.g. quizzes or cryptocurrency statistics).`
  },
  {
    title: "Gamification of Products",
    description: `
      Participants will learn how to implement game elements in an educational or information product to increase user engagement.
    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  },
  {
    title: "Project Management",
    description: `
      Planning.
      Brand creation.
      Launch and attracting the first users.    `,
    secondaryTitle: "Working with a modern technology stack",
    secondaryDescription: `
      React.js for front-end.
      Node.js for API.
      Integrating Firebase or other cloud technologies.
    `
  }
];

const cardsData = [
  {
    imageSrc: "", // Путь к изображению
    title: "Graphic Design | UI/UX",
    description: `
      Free case design for real-world tasks. We will teach you how to create aesthetic interfaces and design projects for startups.

    `,
    secondaryTitle: "Frontend | React",
    secondaryDescription: `
      Modern UI development. Learn React to build interactive applications.
    `
  },
  
  {
    imageSrc2: "", // Путь к изображению
    title: "Backend | Django | JS",
    description: `
      Reliable systems based on Django. Developing the server side for complex projects.

    `,
    secondaryTitle: "IT: Fullstack",
    secondaryDescription: `
      Comprehensive approach to development. Combining front-end and back-end in one project.
    `
  },

  {
    imageSrc2: crypto3, // Путь к изображению
    title: "",
    description: `
      Implemented design case
    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  },

  {
    imageSrc2: crypto2, // Путь к изображению
    title: "",
    description: `
      Fullstack project (e.g. website/web app)
    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  }
];



const ComplexComponent = () => {
  return (
    <div className="complex-component" id="lessons">
      
      <div className="section-header">
            <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                My <span className="highlight">Projects</span> and <span className="highlight">Works</span>
             </h2>
        </div>
      
      <div className="content-wrapper">
        {/* Левый блок */}
        
        <div className="left-block">
          <div className="section-header">
          {/* <h2>О проекте</h2> */}
          <h2>
          About this <span className="highlight">Course</span>
          </h2>
          
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
            
            
        </div>

        {/* Центральный блок */}
        <div className="center-block">
        <div className="section-header">
        <h2>
         
          Course <span className="highlight"> Objectives</span>
          </h2></div>
          {classesData.map((card, i) => (
            <div key={i} className="card">
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
              <h4 className="title">{card.secondaryTitle}</h4>
              <p className="description">{card.secondaryDescription}</p>

              
            </div>

            
          ))}
          

        </div>

        

        {/* Правый блок */}

        <div className="right-block">
          <div className="section-header">  
        <h2 className="">
          Training  <span className="highlight">Program</span>
          </h2></div>
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

            <div className="buttons">
                <a href="/landing"><button className="btn-purple">Select a course</button></a>
              </div>

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

export default ComplexComponent;
