import React from 'react';
import './Component.css';




const infoData = [
  {
    title: "Hello!",
    description: `
            My name is Dmitry Gornakov, I am a creative technologist with experience in graphic design, frontend and backend development, and machine learning.

    `,
    secondaryTitle: "Targets",
    secondaryDescription: `
      My mission is to teach you skills that will help you create innovative projects and build a career in IT.
    `
  },
  // {
  //   title: "Стек технологий с позиции Full Stack Developer",
  //   description: `
  //     Front-end: React, Tailwind CSS, Bootstrap
  //     Back-end: Node.js (Express.js), Python (Django, FastAPI)
  //     Базы данных: PostgreSQL, MongoDB, Redis
  //     DevOps: Docker, Kubernetes, GitHub Actions
  //   `,
  //   secondaryTitle: "Цели",
  //   secondaryDescription: `
  //     Создание отзывчивых интерфейсов, надежная серверная логика, оптимизация инфраструктуры и автоматизация процессов.
  //   `
  // }
];

const classesData = [
  {
    title: "Startup for learning cryptocurrencies",
    description: `
      Website on React or Vue.js with backend integration via Node.js. Front-end, Back-end technologies, libraries and integrations, DevOps and hosting, Gamification.
    `,
    secondaryTitle: "Course objectives",
    secondaryDescription: `
      MVP development. Create a minimum viable product: from the idea to the implementation of the first functions (for example, quizzes or statistics on cryptocurrencies).    `
  },
  // {
  //   title: "Стек технологий с позиции Full Stack Developer",
  //   description: `
  //     Front-end: React, Tailwind CSS, Bootstrap
  //     Back-end: Node.js (Express.js), Python (Django, FastAPI)
  //     Базы данных: PostgreSQL, MongoDB, Redis
  //     DevOps: Docker, Kubernetes, GitHub Actions
  //   `,
  //   secondaryTitle: "Цели",
  //   secondaryDescription: `
  //     Создание отзывчивых интерфейсов, надежная серверная логика, оптимизация инфраструктуры и автоматизация процессов.
  //   `
  // }
];

const cardsData = [
  {
    title: "Project Management",
    description: `
      Full cycle of startup development: Planning. Brand creation. Launch and attracting first users.

    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  },
  {
    title: "Working with a modern technology stack",
    description: `
      React.js for front-end.
Node.js for API.
Integration of cloud technologies.
    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  }
];



const ComplexComponent = () => {
  return (
    <div className="complex-component">
      
      
      <div className="content-wrapper">
        {/* Левый блок */}

        
        <div className="left-block">
          <div className="section-header">
          {/* <h2>О проекте</h2> */}
          <h2>
          About <span className="highlight">me</span>
          </h2>
          
        </div>
        
          {infoData.map((card, i) => (
              <div key={i} className="card">
                <h3 className="title">{card.title}</h3>
                <p className="description">{card.description}</p>
                <h4 className="title">{card.secondaryTitle}</h4>
                <p className="description">{card.secondaryDescription}</p>

                
              </div>
            ))}

            <br/>
            <div className="buttons">
                <a href="mailto:dmitri.gornakov@gmail.com"><button className="btn-green">Start working</button></a>
              </div>
          {/* <div className="card">
            <img src="path-to-icon.png" alt="e-Coupon" />
            <p className="description">
              Привет! Меня зовут Дмитрий Горнаков, я - креативный технологист с опытом работы в графическом дизайне, фронтенд- и бэкенд-разработке, и машинном обучении. Моя миссия - обучать вас навыкам, которые помогут создавать инновационные проекты и строить карьеру в IT.
            </p>
          </div>
          <br/>
          <div className="buttons">
          <a href="mailto:dmitri.gornakov@gmail.com"><button className="cta-button btn-green">Начать работать</button></a>
          </div> */}
        </div>

        {/* Центральный блок */}
        <div className="center-block">
        <div className="section-header">
        <h2>
            Creative <span className="highlight">Classes</span>
          </h2></div>
          {classesData.map((card, i) => (
            <div key={i} className="card">
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
              <h4 className="title">{card.secondaryTitle}</h4>
              <p className="description">{card.secondaryDescription}</p>

              <div className="buttons">
              <a href="mailto:dmitri.gornakov@gmail.com"><button className="btn-purple">Select a course</button></a>
                {/* <button className="cta-button btn-purple">Начать работать</button> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="center-block">
          <div className="card-row">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="card">
                <img src="path-to-icon.png" alt="e-Coupon" />
                <p>e-Coupon</p>
              </div>
            ))}
          </div> */}
          {/* <p className="description">
            Привет! Меня зовут Дмитрий Горнаков, я - креативный технологист с опытом работы в графическом дизайне, фронтенд- и бэкенд-разработке, и машинном обучении. Моя миссия - обучать вас навыкам, которые помогут создавать инновационные проекты и строить карьеру в IT.
          </p>
          <div className="buttons">
            <button className="cta-button btn-green">Начать работать</button>
            <button className="cta-button btn-purple">Начать работать</button>
          </div> */}
        {/* </div> */}

        {/* Правый блок */}

        <div className="right-block">
          <div className="section-header">  
        <h2 className="">
          Technology  <span className="highlight">Stack</span>
          </h2></div>
          {cardsData.map((card, i) => (
            <div key={i} className="card">
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
              <h4 className="title">{card.secondaryTitle}</h4>
              <p className="description">{card.secondaryDescription}</p>

              
            </div>
          ))}
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
