import { useEffect, useState } from "react";
import './Component.css';
import photo1 from './assets/photo-1.jpg';
// import dgcv1 from './assets/dmitri-gornakov-cv.pdf'



export default function IntroductionComponent({ image1, image2, image3, title, description, secondaryTitle, secondaryDescription }) {
  return (
    <div className="complex-component">

      <div className="content-wrapper">
        <div className="row">

          <div className="column">

          <div className="intro-text">
            <div className="card">
              {image3 && <img src={image3} alt={title} className="card-image" />}
              {image2 && <img src={image2} alt={title} className="card-image" />}
              {image1 && <img src={image1} alt={title} className="card-image" />}
              <h3 className="title">{title}</h3>
              <p className="description">{description}</p>
              {secondaryTitle && <h4 className="title">{secondaryTitle}</h4>}
              {secondaryDescription && <p className="description">{secondaryDescription}</p>}
            </div>
                                
          </div>
          </div>

          <div className="column">

          <div className="intro-text">
            <div className="card">
              {image3 && <img src={image3} alt={title} className="card-image" />}
              {image2 && <img src={image2} alt={title} className="card-image" />}
              <h3 className="title">{title}</h3>
              <p className="description">{description}</p>
              {image1 && <img src={image1} alt={title} className="card-image" />}
              {secondaryTitle && <h4 className="title">{secondaryTitle}</h4>}
              {secondaryDescription && <p className="description">{secondaryDescription}</p>}
            </div>
                                
          </div>

          </div>
        </div>
        
        
      </div>
    </div>
  );
};
