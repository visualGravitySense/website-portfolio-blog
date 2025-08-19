import { useEffect, useState } from "react";
import './Component.css';
import photo1 from './assets/photo-1.jpg';
// import dgcv1 from './assets/dmitri-gornakov-cv.pdf'



export default function IntroductionComponent({ image1, image2, image3, title, description, secondaryTitle, secondaryDescription, titleIndustry1, titleIndustry2, titleIndustry3, titleIndustry4, titleIndustry5, titleIndustry6, secDescr1, secDescr2, secDescr3, secDescr4, secDescr5, secDescr6 }) {
  return (
    <div className="complex-component">

      <div className="content-wrapper">
        {/* <div className="row"> */}

          {/* <div className="column"> */}

          <div className="intro-text">
            <div className="card">
              {image3 && <img src={image3} alt={title} className="card-image" />}
              {image2 && <img src={image2} alt={title} className="card-image" />}
              {image1 && <img src={image1} alt={title} className="card-image" />}
              <h3 className="title">{title}</h3>
              <p className="description">{description}</p>
              
              <h3 className="title">{titleIndustry1}</h3>
              <p className="description">{secDescr1}</p>
              
              <h3 className="title">{titleIndustry2}</h3>
              <p className="description">{secDescr2}</p>

              <h3 className="title">{titleIndustry3}</h3>
              <p className="description">{secDescr3}</p>
              
              <h3 className="title">{titleIndustry4}</h3>
              <p className="description">{secDescr4}</p>

              <h3 className="title">{titleIndustry5}</h3>
              <p className="description">{secDescr5}</p>
              
              <h3 className="title">{titleIndustry6}</h3>
              <p className="description">{secDescr6}</p>

              {/* {secondaryTitle && <h4 className="title">{secondaryTitle}</h4>}
              {secondaryDescription && <p className="description">{secondaryDescription}</p>} */}
            </div>
                                
          </div>
          {/* </div> */}

          {/* <div className="column"> */}

          {/* <div className="intro-text">
            <div className="card">
              {image3 && <img src={image3} alt={title} className="card-image" />}
              {image2 && <img src={image2} alt={title} className="card-image" />}
              <h3 className="title">{title}</h3>
              <p className="description">{description}</p>
              {image1 && <img src={image1} alt={title} className="card-image" />}
              {secondaryTitle && <h4 className="title">{secondaryTitle}</h4>}
              {secondaryDescription && <p className="description">{secondaryDescription}</p>}
            </div>
                                
          </div> */}

          {/* </div> */}
        {/* </div> */}
        
        
      </div>
    </div>
  );
};
