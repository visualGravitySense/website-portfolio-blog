// Что вы получите после курса – список с иконками 

import { useEffect, useState } from "react";
import './Component.css';
import './AboutCertificate.css';
import photo1 from './assets/photo-1.jpg';
// import dgcv1 from './assets/dmitri-gornakov-cv.pdf'

import ReactMarkdown from "react-markdown";

export default function AboutCertificate({ image1, image2, image3, title, description, secTitle1, secDescr1, secTitle2, secDescr2, secTitle3, secDescr3, secDescr4 }) {
  return (
    <div className="complex-wrapper">
      
      {/* Левая сторона - картинка */}
      <div className="complex-image-container">
        {image2 && <img src={image2} alt={title} className="complex-image" />}
      </div>

      {/* Правая сторона - текст */}
      <div className="complex-text-container">
        <h3 className="complex-title">{secTitle1}</h3>
        <div className="complex-description">
          <p><ReactMarkdown>{secDescr1}</ReactMarkdown></p>
        </div>

        <h3 className="complex-title">{secTitle2}</h3>
        <div className="complex-description">
          <p><ReactMarkdown>{secDescr2}</ReactMarkdown></p>
        </div>

        {/* <div className="complex-description">
          <p><ReactMarkdown>{description}</ReactMarkdown></p>
        </div>

        <div className="complex-description">
          <p><ReactMarkdown>{description}</ReactMarkdown></p>
        </div> */}

      </div>
      
    </div>

  );
};
