import React from "react";
import "./ChaosBlock.css";
import creative1 from './assets/creative1.jpg';
import creative2 from './assets/creative2.jpg';

const ChaosBlock = () => {
  return (
    <section className="chaos-block">
  <div className="chaos-content">
    <p className="chaos-sub">
      Курс дизайна
    </p>
    <h1 className="chaos-title">От скучного к креативному</h1>
    <p className="chaos-description">
      Научитесь создавать потрясающий дизайн, ломая шаблоны и выходя за рамки правил.
    </p>
    <button className="cta-button">Узнать больше</button>
  </div>
  <div className="chaos-images">
    <img
      src={creative1}
      alt="Creative design example 1"
      className="chaos-image chaos-image-1"
    />
    <img
      src={creative2}
      alt="Creative design example 2"
      className="chaos-image chaos-image-2"
    />
  </div>
</section>

  );
};


export default ChaosBlock;
