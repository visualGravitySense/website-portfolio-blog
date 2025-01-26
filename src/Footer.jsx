import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact" >
      <p>&copy; 2025 Dmitri Gornakov | Creative Technologist</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/dmitri-gornakov-7a664840/" target="_blank">LinkedIn</a>
        <a href="https://github.com/visualGravitySense" target="_blank">GitHub</a>
        <a href="https://www.instagram.com/gornainsta/" target="_blank">Instagram</a>
        <a href="mailto:dmitri.gornakov@gmail.com">Write me</a>
      </div>
    </footer>
  );
};

export default Footer;
