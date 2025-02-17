import { useEffect, useState } from "react";
import './Component.css';
import photo1 from './assets/photo-1.jpg';
// import dgcv1 from './assets/dmitri-gornakov-cv.pdf'



export default function CompaniesComponent({ imageSrc1, imageSrc2, imageSrc3, title, description, secondaryTitle, secondaryDescription }) {
  return (
    <div className="complex-component">

      <div className="content-wrapper">
        <div className="intro-text">
        <div className="card">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          
        </div>
          {imageSrc1 && <img src={imageSrc1} alt={title} className="brand-image" />}
          {imageSrc1 && <img src={imageSrc1} alt={title} className="brand-image" />}
        <div className="card">          
          {secondaryTitle && <h4 className="title">{secondaryTitle}</h4>}
          {secondaryDescription && <p className="description">{secondaryDescription}</p>}
          </div>  
          {imageSrc1 && <img src={imageSrc1} alt={title} className="brand-image" />}
          {imageSrc2 && <img src={imageSrc2} alt={title} className="brand-image" />}

        </div>
        
      </div>
    </div>
  );
};
