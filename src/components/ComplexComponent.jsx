import React from 'react';
import '../Component.css';
import photo1 from '../assets/photo-1.jpg';
import dgcv1 from '../assets/dmitri-gornakov-cv.pdf'

// import { CogIcon, ChartBarIcon, GlobeAltIcon, UserCircleIcon, AdjustmentsHorizontalIcon, DevicePhoneMobileIcon, DocumentChartBarIcon, EyeIcon, LightBulbIcon  } from "@heroicons/react/24/solid";

import { 
  CogIcon,
  UserGroupIcon, // Анализ поведения пользователей
  AdjustmentsIcon, // A/B-тестирование
  TrendingUpIcon, // Оптимизация на основе данных
  RefreshIcon, // Цифровая трансформация
  ChartPieIcon, // Аналитика и бизнес-отчеты
  LightningBoltIcon, // Оптимизация сайтов
  SearchIcon, // Анализ конкурентов
  LightBulbIcon // Разработка digital-стратегий
} from "@heroicons/react/solid";

const infoData = [
  {
    imageSrc3: "",
    icon: <UserGroupIcon className="w-8 h-8 text-blue-500" />,
    title: "Анализ поведения пользователей",
    description: `
            С помощью инструментов аналитики я собираю информацию о том, как пользователи взаимодействуют с сайтом или приложением. Это может быть, например, просмотр кликов, время на странице, конверсии.

    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  },

  {
    imageSrc3: "",
    icon: <AdjustmentsIcon className="w-8 h-8 text-blue-500" />,
    title: "A/B-тестирование",
    description: `
            Я провожу эксперименты, чтобы сравнивать разные версии элементов дизайна и интерфейса. Это позволяет выявить, что работает лучше с точки зрения пользовательского опыта и конверсий.

    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  },

  {
    imageSrc3: "",
    icon: <TrendingUpIcon className="w-8 h-8 text-blue-500" />,
    title: "Оптимизация на основе данных",
    description: `
            После получения данных я использую их для оптимизации интерфейсов и улучшения взаимодействия с пользователем, что ведет к улучшению показателей: увеличению конверсий, снижению отказов и улучшению общего UX.

    `,
    secondaryTitle: "",
    secondaryDescription: `
      
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
    icon: <CogIcon className="w-8 h-8 text-purple-500" />,
    title: "Автоматизация процессов",
    description: `
      Помогаю компаниям внедрить автоматические решения для рутинных задач, чтобы улучшить их эффективность. Это может быть как автоматизация с помощью программного обеспечения, так и интеграция различных систем.
    `,
    secondaryTitle: "",
    secondaryDescription: `
      `
  },
  {
    icon: <RefreshIcon className="w-8 h-8 text-blue-500" />,
    title: "Цифровая трансформация",
    description: `
      Рекомендую и внедряю технологии, которые помогают компаниям перейти в цифровой формат: от использования облачных решений до модернизации существующих ИТ-систем.
    `,
    secondaryTitle: "",
    secondaryDescription: `
      `
  },
  // {
  //   title: "CRM-системы",
  //   description: `
  //     Разрабатываю и внедряю решения для управления взаимоотношениями с клиентами. Это помогает компаниям автоматизировать маркетинг, продажи и обслуживание клиентов, улучшая их отношения с клиентами и повышая лояльность.
  //   `,
  //   secondaryTitle: "",
  //   secondaryDescription: `
      
  //   `
  // },
  {
  icon: <ChartPieIcon className="w-8 h-8 text-blue-500" />,
  title: "Аналитика и бизнес-отчеты",
  description: `
    Настройка систем аналитики для сбора данных о бизнес-процессах, что помогает принимать более обоснованные решения и улучшать операционную эффективность.
  `,
  secondaryTitle: "",
  secondaryDescription: `
    
  `
}
];

const cardsData = [
  {
    title: "Оптимизация сайтов",
    icon: <LightningBoltIcon className="w-8 h-8 text-blue-500" />,
    description: `
      Провожу аудит сайтов на предмет их производительности, юзабилити и SEO. Это включает в себя проверку скорости загрузки, удобства интерфейса и соответствия современным стандартам дизайна.

    `,
    secondaryTitle: "",
    secondaryDescription: `
      

    `
  },
  {
    title: "Анализ конкурентов",
    icon: <SearchIcon  className="w-8 h-8 text-blue-500" />,
    description: `
      Анализирую сайты конкурентов для выявления их сильных и слабых сторон. Это помогает предложить стратегии, которые позволят компании выделиться на фоне конкурентов, улучшая конверсии и пользовательский опыт.
    `,
    secondaryTitle: "",
    secondaryDescription: `
      
    `
  },
  {
    title: "Разработка digital-стратегий",
    icon: <LightBulbIcon  className="w-8 h-8 text-blue-500" />,
    description: `
       Разрабатываю стратегию для улучшения присутствия компании в интернете, включая SEO, контент-маркетинг, SMM, рекламу и т.д. Стратегия основывается на анализе данных о целевой аудитории и текущих рыночных тенденциях.
    `,
    secondaryTitle: "",
    secondaryDescription: `
      



    `
  }
];



const ComplexComponent = () => {
  return (
    <div className="complex-component">

      <div className="section-header">
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Мои <span className="highlight">компетенции</span> 
            </h2>
      </div>
      
      
      <div className="content-wrapper">
        {/* Левый блок */}
        
        <div className="left-block">
          <div className="section-header">
          {/* <h2>О проекте</h2> */}
          <h2>
          Data-Driven <span className="highlight">UX/UI Design</span>
          </h2>
          
        </div>
        
          {infoData.map((card, i) => (
              <div key={i} className="card">
                {/* {card.imageSrc3 && (
                  <img src={card.imageSrc3} alt={card.title} className="card-image" />
                )} */}
                <div className="icon-style">{card.icon}</div> {/* Иконка */}

                <h3 className="title">{card.title}</h3>
                <p className="description">{card.description}</p>
                <h4 className="title">{card.secondaryTitle}</h4>
                <p className="description">{card.secondaryDescription}</p>

                
              </div>
            ))}

            {/* <br/> */}
            {/* <div className="buttons">
                <a href="mailto:dmitri.gornakov@gmail.com"><button className="btn-green">Start working</button></a>
              </div> */}

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
        IT-<span className="highlight">консалтинг</span>
          </h2></div>
          {classesData.map((card, i) => (
            <div key={i} className="card">
              <div className="icon-style">{card.icon}</div> {/* Иконка */}
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
              <h4 className="title">{card.secondaryTitle}</h4>
              <p className="description">{card.secondaryDescription}</p>

              
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
        Анализ сайтов и <span className="highlight">стратегий</span>
          </h2></div>
          {cardsData.map((card, i) => (
            <div key={i} className="card">
              <div className="icon-style">{card.icon}</div> {/* Иконка */}
              
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
              <h4 className="title">{card.secondaryTitle}</h4>
              <p className="description">{card.secondaryDescription}</p>

              
            </div>
            
          ))}

            {/* <div className="buttons"> */}
            {/* <a href={dgcv1} target = "_blank"> */}
            {/* <a href={dgcv1} download> */}
              {/* <button className="btn-purple">View full CV</button> */}
            {/* </a> */}
              {/* <a href=""><button className="btn-purple">View My CV</button></a> */}
                {/* <button className="cta-button btn-purple">Начать работать</button> */}
            {/* </div> */}
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
