import React from "react";
import myPhoto from "../assets/photo-1.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Левая часть - Фото */}
      <div className="about-me__image">
        <img
          src={myPhoto}
          alt="My Photo"
          className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-purple-500"
        />
      </div>
      
      {/* Правая часть - Текст */}
      <div className="about-me__text">
        <h2 className="text-4xl font-bold text-purple-400">Обо мне</h2>
        <p className="text-lg">
          Я дизайнер и консультант, создаю продукты, основываясь на <span className="text-purple-300 font-semibold">данных и аналитике</span>, а не на догадках.
        </p>
        <p className="text-lg">📊 Анализ поможет выявить точки роста и создавать <span className="text-purple-300 font-semibold">UI/UX-решения</span>, для увеличения конверсии и вовлеченности.</p>
        <p className="text-lg">⚙️ Автоматизирую процессы и цифровые решения, направленные на <span className="text-purple-300 font-semibold">быстрый и эффективный бизнес</span>.</p>
        <p className="text-lg">📈 ИТ-консалтинг и стратегии помогают находить <span className="text-purple-300 font-semibold">оптимальные пути развития</span> для компаний и масштабировать цифровое присутствие.</p>
        <p className="text-lg font-semibold text-purple-400">Работаю на стыке аналитики, дизайна и технологий, создавая цифровые решения, которые действительно работают.</p>
      </div>
    </div>
  );
};

export default AboutMe;
