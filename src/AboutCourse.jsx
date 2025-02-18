import { useEffect, useState } from "react";
import './Component.css';
import photo1 from './assets/photo-1.jpg';
// import dgcv1 from './assets/dmitri-gornakov-cv.pdf'

import ReactMarkdown from "react-markdown";

export default function IntroductionComponent({ image1, image2, image3, title, description, secTitle1, secDescr1, secTitle2, secDescr2, secTitle3, secDescr3, secDescr4 }) {
  return (
    <div className="complex-component">

      <div className="">

        
        
          {/* <div className="row"> */}

            

            {/* <div className="column"> */}
              <div className="card">
                {/* {imageSrc3 && <img src={imageSrc3} alt={title} className="card-image" />} */}
                {/* {imageSrc2 && <img src={imageSrc2} alt={title} className="card-image" />} */}
                {image1 && <img src={image1} alt={title} className="card-image" />}
                <h3 className="title">{secTitle1}</h3>
                
                <div className="markdown-container">

                <p className="description"><ReactMarkdown>{secDescr1}</ReactMarkdown></p>
                </div>
                <h3 className="title">{secTitle2}</h3>
                
                <div className="markdown-container">

                  <p className="description"><ReactMarkdown>{secDescr2}</ReactMarkdown></p>
                </div>
                <div className="markdown-container">
                  <p className="description"><ReactMarkdown>{secDescr3}</ReactMarkdown></p>
                </div>

                <div className="markdown-container">
                  <p className="description"><ReactMarkdown>{secDescr4}</ReactMarkdown></p>
                </div>
                {/* {secondaryTitle && <h4 className="title">{secondaryTitle}</h4>} */}
               </div>
               {/* </div> */}

              {/* <div className="column"> */}
                
                
                
              {/* </div> */}
          
          {/* </div> */}

        </div>
        
        </div>

  );
};
