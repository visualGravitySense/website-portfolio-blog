import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Popup.css";

import './Component.css';
import crypto1 from './assets/crypto-startup-1.jpg';
import crypto2 from './assets/crypto-startup-2.jpg';
import crypto3 from './assets/crypto-startup-3.jpg';


export default function ({ imageSrc3, title, description, secondaryTitle, secondaryDescription }) {
  return (
   
      <div className="block">
        <div className="card">
          {imageSrc3 && (
            
            <img src={imageSrc3} alt={title} className="card-image" />
          )}
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <h4 className="title">{secondaryTitle}</h4>
          <p className="description">{secondaryDescription}</p>
        </div>
      </div>
  );
};
