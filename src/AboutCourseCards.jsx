import { useEffect, useState } from "react";
import './Component.css';
import photo1 from './assets/photo-1.jpg';
// import dgcv1 from './assets/dmitri-gornakov-cv.pdf'

import ReactMarkdown from "react-markdown";

export default function IntroductionComponent({ image1, image2, image3, title, description, aboutTitle1, aboutDescr1, aboutTitle2, aboutDescr2, aboutTitle3, aboutDescr3, aboutTitle4, aboutDescr4 }) {
  return (
    <div className="complex-component">

      <div className="">
        
          {/* <div className="row"> */}
            
            {/* <div className="column"> */}
              
              {/* <div className="column"> */}
                
                <div className="card">
                  {/* {image2 && <img src={image2} alt={title} className="card-image" />} */}
                  <h3 className="title">{aboutTitle1}</h3>
                  <p className="description">{aboutDescr1}</p>
                  </div>

                  <div className="card">
                    {/* {image3 && <img src={image3} alt={title} className="card-image" />} */}
                    <h3 className="title">{aboutTitle2}</h3>
                    <p className="description">{aboutDescr2}</p>
                  </div>

                <div className="card">
                  {/* {image2 && <img src={image2} alt={title} className="card-image" />} */}
                  <h3 className="title">{aboutTitle3}</h3>
                  <p className="description">{aboutDescr3}</p>
                  </div>

                  {/* <div className="card">
                    {image3 && <img src={image3} alt={title} className="card-image" />}
                    <h3 className="title">{aboutTitle3}</h3>
                    <p className="description">{aboutDescr3}</p>
                  </div> */}
                
              {/* </div> */}
          
          {/* </div> */}

        </div>
        
        </div>

  );
};
