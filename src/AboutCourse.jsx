import { useEffect, useState } from "react";
import './Component.css';
import photo1 from './assets/photo-1.jpg';
// import dgcv1 from './assets/dmitri-gornakov-cv.pdf'



export default function IntroductionComponent({ image1, image2, image3, title, description, secTitle1, secDescr1, secTitle2, secDescr2, secTitle3, secDescr3 }) {
  return (
    <div className="complex-component">

      <div className="">

        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        
          <div className="row">

            

            <div className="column">
              <div className="card">
                {/* {imageSrc3 && <img src={imageSrc3} alt={title} className="card-image" />} */}
                {/* {imageSrc2 && <img src={imageSrc2} alt={title} className="card-image" />} */}
                {image1 && <img src={image1} alt={title} className="card-image" />}
                <h3 className="title">{secTitle1}</h3>
                <p className="description">{secDescr1}</p>
                <h3 className="title">{secTitle2}</h3>
                <p className="description">{secDescr2}</p>
                {/* {secondaryTitle && <h4 className="title">{secondaryTitle}</h4>} */}
               </div></div>

              <div className="column">
                
                <div className="card">
                  {/* {image2 && <img src={image2} alt={title} className="card-image" />} */}
                  <h3 className="title">{secTitle1}</h3>
                  <p className="description">{secDescr1}</p>
                  </div>

                  <div className="card">
                    {/* {image3 && <img src={image3} alt={title} className="card-image" />} */}
                    <h3 className="title">{secTitle3}</h3>
                    <p className="description">{secDescr3}</p>
                  </div>

                <div className="card">
                  {/* {image2 && <img src={image2} alt={title} className="card-image" />} */}
                  <h3 className="title">{secTitle2}</h3>
                  <p className="description">{secDescr2}</p>
                  </div>

                  <div className="card">
                    {/* {image3 && <img src={image3} alt={title} className="card-image" />} */}
                    <h3 className="title">{secTitle3}</h3>
                    <p className="description">{secDescr3}</p>
                  </div>
                
              </div>
          
          </div>

        </div>
        
        </div>

  );
};
