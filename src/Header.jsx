import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Creative Technologist</div>
      <nav className="nav">
        <a href="#hero">Главная</a>
        <a href="#lessons">Уроки</a>
        <a href="#projects">Проекты</a>
        <a href="#contact">Контакты</a>
      </nav>
    </header>
  );
};

export default Header;
