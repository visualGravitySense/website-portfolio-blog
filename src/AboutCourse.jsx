import { useEffect, useState } from "react";
import './Component.css';


import ReactMarkdown from "react-markdown";

export default function IntroductionComponent({ image1, image2, image3, secTitle1, secDescr1, secTitle2, secDescr2 }) {
  return (
    <div className="complex-component">

      <div className="">

        <div className="card">
          {/* {imageSrc3 && <img src={imageSrc3} alt={title} className="card-image" />} */}
          {/* {imageSrc2 && <img src={imageSrc2} alt={title} className="card-image" />} */}
          {image1 && <img src={image1}  className="card-image" />}
          <h3 className="title">{secTitle1}</h3>
          
          <div className="markdown-container">
            <p className="description"><ReactMarkdown>{secDescr1}</ReactMarkdown></p>
          </div>

          <h3 className="title">{secTitle2}</h3>
          
          <div className="markdown-container">
            <p className="description"><ReactMarkdown>{secDescr2}</ReactMarkdown></p>
          </div>
          
          {/* <div className="markdown-container">
            <p className="description"><ReactMarkdown>{secDescr3}</ReactMarkdown></p>
          </div> */}

          {/* <div className="markdown-container">
            <p className="description"><ReactMarkdown>{secDescr4}</ReactMarkdown></p>
          </div> */}
        </div>

      </div>
    </div>

  );
};
