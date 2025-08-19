import React from "react";
import "./BgImageSection.css";

const BgImageSection = ({ imgBG, title, description }) => {
  return (
    <div 
      className="bg-section" 
      style={{ backgroundImage: `url(${imgBG})` }}
    >
      <div className="bg-content">
        <h2 className="bg-title">{title}</h2>
        <p className="bg-description">{description}</p>
      </div>
    </div>
  );
};

export default BgImageSection;
