import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Dmitri Gornakov</div>
      <div className="navigation-container">
        <nav className="nav">
          <a href="#hero">Главная</a>
          <a href="#lessons">Уроки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
        <div className="social-icons">
          <a href="https://github.com/visualGravitySense" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dmitri-gornakov-7a664840/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/gornainsta/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:dmitri.gornakov@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
