// Что вы получите после курса – список с иконками 

import { useEffect, useState } from "react";
import './Component.css';
import './AboutCertificate.css';


import ReactMarkdown from "react-markdown";

export default function AboutCertificate({ classImage, classTitle, classDescription }) {
  return (
    <div className="complex-wrapper">
      
      {/* Левая сторона - картинка */}
      <div className="complex-image-container">
        {classImage && <img src={classImage}  className="complex-image" />}
      </div>

      {/* Правая сторона - текст */}
      <div className="complex-text-container">
        <h3 className="complex-title">{classTitle}</h3>
        <div className="complex-description">
          <p><ReactMarkdown>{classDescription}</ReactMarkdown></p>
        </div>

        {/* <h3 className="complex-title">{secTitle2}</h3>
        <div className="complex-description">
          <p><ReactMarkdown>{secDescr2}</ReactMarkdown></p>
        </div> */}

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
