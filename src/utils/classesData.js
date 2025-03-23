import { db } from "../../firebaseConfig.js";
import { doc, updateDoc } from "firebase/firestore";

const updateClassesData = async () => {
  const classesRef = doc(db, "classes", "2"); // Заменить на ID документа

  const classesData = {
    
    title: "Разработка продукта для услуг на основе машинного обучения",
    description: "В курсе содержатся принципы создания эффективных сервисов с ML-компонентами.",
    ctaText: "Зарегистрироваться",
    
    bgImage: "https://i.pinimg.com/736x/65/ac/8e/65ac8e94a406695b6467625d11021ffa.jpg",
    
   
    secTitle1: "Освой продуктовый дизайн и создай мощный POS-сервис с элементами машинного обучения!",
    secTitle2: "На курсе ты:",
    secDescr1: "Хочешь разрабатывать интерфейсы, которые не просто красиво выглядят, но и реально помогают бизнесу? Тогда этот курс для тебя! Мы разберем, как создавать удобные и продуманные POS-системы, которые анализируют данные и делают работу быстрее и эффективнее.",
    secDescr2: "Освоишь ключевые инструменты продуктового дизайна. Поймешь, как устроены лучшие POS-решения на рынке. Научишься проектировать интерфейсы, которые действительно облегчают жизнь пользователям. Разберешь реальные кейсы и внедришь элементы машинного обучения в свой проект.",
    

    caseDescr1: "Пока отзывов нет, но мы уверены, что этот курс станет прорывным!",
    
    caseLink: "https://visualgravitysense.github.io/class/product-design",

    caseDescr2: "Пока отзывов нет, но мы уверены, что этот курс станет прорывным!",
    linkName: "",
    caseLink: "https://visualgravitysense.github.io/class/product-design",

    teacherImage: "https://i.pinimg.com/736x/eb/2d/4e/eb2d4e5009cd996f1d90d06d4c9b5566.jpg",
    teacherTitle: "Дмитрий Горнаков",
    teacherDescription: "👨‍🏫 Дмитрий Горнаков – эксперт в области продуктового дизайна...",
    teacherLink: "https://www.linkedin.com/in/dmitri-gornakov-7a664840/",
    
    certificateImage: "https://i.pinimg.com/736x/ed/87/cf/ed87cf6af6c5711186d34b48c05456df.jpg",
    certificateTitle: "Сертификат и аккредитация",
    certificateDescription: "🎓 По окончании курса вы получите **именной сертификат**, подтверждающий ваши знания и навыки. Данный сертификат поможет вам выделиться среди конкурентов и станет отличным дополнением к вашему портфолио.",
    
    title: "Какие профессии можно освоить после курса?",
    description: "caseData.professionDescription",

    image: "https://i.pinimg.com/736x/39/61/f5/3961f5c2d68c6093ce16370a27ce197f.jpg", descr: "Продуктовый дизайнер" ,
    image: "https://i.pinimg.com/736x/39/61/f5/3961f5c2d68c6093ce16370a27ce197f.jpg", descr: "UX/UI-дизайнер" ,
    image: "https://i.pinimg.com/736x/39/61/f5/3961f5c2d68c6093ce16370a27ce197f.jpg", descr: "Дизайнер интерфейсов для POS-систем" ,
    image: "https://i.pinimg.com/736x/39/61/f5/3961f5c2d68c6093ce16370a27ce197f.jpg", descr: "Специалист по Data-Driven дизайну" ,
    image: "https://i.pinimg.com/736x/39/61/f5/3961f5c2d68c6093ce16370a27ce197f.jpg", descr: "Дизайнер цифровых продуктов" ,
    image: "https://i.pinimg.com/736x/39/61/f5/3961f5c2d68c6093ce16370a27ce197f.jpg", descr: "Product Manager с фокусом на дизайн и ML" ,
        
    
    question1: "Нужно ли мне уметь программировать?", answer: "Нет, но базовые знания дизайна и ML будут плюсом." ,
    question2: "Подойдет ли этот курс начинающим?", answer: "Да, мы разбираем все с нуля, но опыт в дизайне или IT поможет быстрее освоить материал." ,
    question3: "Сколько времени займет обучение?", answer: "Около 3 месяцев при средней нагрузке. Но вы можете проходить курс в удобном для вас темпе." ,
    question: "Есть ли практика?", answer: "Да, мы работаем над реальными проектами и создаем готовый продукт." ,
    
    
    title: "Видеоурок: Введение в продуктовый дизайн",
    videoUrl: "https://www.youtube.com/watch?v=a9p0bXG1byk",
    
    
    image: "https://i.pinimg.com/736x/39/61/f5/3961f5c2d68c6093ce16370a27ce197f.jpg",
    title: "Бонусы при записи",
    description: "💶 Скидка на эксклюзивные дополнительные курсы 🧑‍🏫 Индивидуальные консультации от эксперта и менторство 🏢 Возможность стажировки в реальных проектах",
    
    
    details1: "Стоимость курса с проектной работой и обратной связью",
    
    price1: "249 евро",
    
    pricing1: "💰 Сколько стоит курс?",
      
    
  };

  try {
    await updateDoc(classesRef, classesData);
    console.log("Classes data updated successfully!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

updateClassesData();
