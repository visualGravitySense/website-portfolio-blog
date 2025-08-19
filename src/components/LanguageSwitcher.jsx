import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${currentLanguage === 'ru' ? 'active' : ''}`}
        onClick={() => switchLanguage('ru')}
      >
        RU
      </button>
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => switchLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
