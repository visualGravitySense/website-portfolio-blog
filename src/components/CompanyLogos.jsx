import React from "react";
import "./CompanyLogos.css"

import logo1 from '../assets/logo/logo1.png';
import logo2 from '../assets/logo/logo2.svg';
import logo3 from '../assets/logo/logo3.png';
import logo4 from '../assets/logo/logo4.png';

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
];

const CompanyLogos = () => {
  return (
    <div className="company-logos">
      <h2 className="logos-title">Компании, где работают наши выпускники</h2>
      
      <div className="logos-container">

      {logos.map((logo, index) => (
            <img 
            key={index} 
            src={logo} 
            alt={`Company Logo ${index + 1}`} 
            className="company-logo" />
        ))}

      </div>
    </div>
  );
};

export default CompanyLogos;
