export const translations = {
  ru: {
    // Header
    nav: {
      home: "Главная",
      cases: "Кейсы",
      courses: "Курсы",
      contact: "Контакт"
    },

    // Hero Section
    hero: {
      title: "Дизайн и IT-консалтинг, основанные на данных",
      subtitle: "Помогаю бизнесу расти через аналитику, UX/UI и автоматизацию процессов",
      ctaText: "Запросить консультацию"
    },

    // About Me
    aboutMe: {
      title: "Обо мне",
      description: "Я дизайнер и IT-консультант с опытом в аналитике данных, UX/UI дизайне и автоматизации процессов. Помогаю бизнесу расти через технологические решения.",
      experience: "Опыт работы",
      years: "лет",
      projects: "проектов",
      clients: "клиентов",
      intro: "Я дизайнер и консультант, создаю продукты, основываясь на данных и аналитике, а не на догадках.",
      analytics: "Анализ поможет выявить точки роста и создавать UI/UX-решения, для увеличения конверсии и вовлеченности.",
      automation: "Автоматизирую процессы и цифровые решения, направленные на быстрый и эффективный бизнес.",
      consulting: "ИТ-консалтинг и стратегии помогают находить оптимальные пути развития для компаний и масштабировать цифровое присутствие.",
      conclusion: "Работаю на стыке аналитики, дизайна и технологий, создавая цифровые решения, которые действительно работают."
    },

    // Portfolio
    portfolio: {
      title: "Кейсы моих",
      projects: "проектов",
      viewDetails: "Подробнее"
    },

    // Courses
    courses: {
      title: "Мои курсы",
      subtitle: "Обучение дизайну и IT-консалтингу",
      enroll: "Записаться"
    },

    // Footer
    footer: {
      contact: "Связаться",
      follow: "Подписаться",
      rights: "Все права защищены"
    },

    // Common
    common: {
      learnMore: "Узнать больше",
      contact: "Связаться",
      download: "Скачать",
      readMore: "Читать далее"
    },

    // Popup Form
    popup: {
      title: "Запрос коммерческого предложения",
      description: "Мы подготовим для вас коммерческое предложение с оценкой стоимости и примерами работ из вашей области.",
      name: "Ваше имя",
      company: "Название компании (необязательно)",
      email: "E-mail",
      message: "Краткое описание задачи (необязательно)",
      send: "Отправить",
      success: "Сообщение отправлено успешно!",
      error: "Ошибка отправки сообщения. Попробуйте еще раз.",
      requiredFields: "Пожалуйста, заполните обязательные поля."
    }
  },

  en: {
    // Header
    nav: {
      home: "Home",
      cases: "Cases",
      courses: "Courses",
      contact: "Contact"
    },

    // Hero Section
    hero: {
      title: "Data-driven Design and IT Consulting",
      subtitle: "Helping businesses grow through analytics, UX/UI and process automation",
      ctaText: "Request Consultation"
    },

    // About Me
    aboutMe: {
      title: "About Me",
      description: "I'm a designer and IT consultant with experience in data analytics, UX/UI design and process automation. I help businesses grow through technological solutions.",
      experience: "Experience",
      years: "years",
      projects: "projects",
      clients: "clients",
      intro: "I'm a designer and consultant who creates products based on data and analytics, not guesses.",
      analytics: "Analytics helps identify growth points and create UI/UX solutions to increase conversion and engagement.",
      automation: "I automate processes and digital solutions aimed at fast and efficient business.",
      consulting: "IT consulting and strategies help find optimal development paths for companies and scale digital presence.",
      conclusion: "I work at the intersection of analytics, design and technology, creating digital solutions that really work."
    },

    // Portfolio
    portfolio: {
      title: "My project",
      projects: "cases",
      viewDetails: "View Details"
    },

    // Courses
    courses: {
      title: "My Courses",
      subtitle: "Learning design and IT consulting",
      enroll: "Enroll"
    },

    // Footer
    footer: {
      contact: "Contact",
      follow: "Follow",
      rights: "All rights reserved"
    },

    // Common
    common: {
      learnMore: "Learn More",
      contact: "Contact",
      download: "Download",
      readMore: "Read More"
    },

    // Popup Form
    popup: {
      title: "Request for a commercial proposal",
      description: "We will prepare a commercial proposal for you with an estimate of cost and examples of work from your field.",
      name: "Your name",
      company: "Company name (optional)",
      email: "E-mail",
      message: "Brief description of the task (optional)",
      send: "Send",
      success: "Message sent successfully!",
      error: "Error sending message. Try again.",
      requiredFields: "Please fill in the required fields."
    }
  }
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k];
    } else {
      // Fallback to Russian if translation not found
      value = translations.ru;
      for (const fallbackKey of keys) {
        if (value && value[fallbackKey]) {
          value = value[fallbackKey];
        } else {
          return key; // Return the key if no translation found
        }
      }
    }
  }
  
  return value;
};
