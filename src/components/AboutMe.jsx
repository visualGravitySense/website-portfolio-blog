import React from "react";
import myPhoto from "../assets/photo-1.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations/translations";

const AboutMe = () => {
  const { currentLanguage } = useLanguage();
  
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
        <h2 className="text-4xl font-bold text-purple-400">{getTranslation(currentLanguage, 'aboutMe.title')}</h2>
        <p className="text-lg">
          {getTranslation(currentLanguage, 'aboutMe.intro')}
        </p>
        <p className="text-lg">📊 {getTranslation(currentLanguage, 'aboutMe.analytics')}</p>
        <p className="text-lg">⚙️ {getTranslation(currentLanguage, 'aboutMe.automation')}</p>
        <p className="text-lg">📈 {getTranslation(currentLanguage, 'aboutMe.consulting')}</p>
        <p className="text-lg font-semibold text-purple-400">{getTranslation(currentLanguage, 'aboutMe.conclusion')}</p>
      </div>
    </div>
  );
};

export default AboutMe;
