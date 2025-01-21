import React from 'react';
import './Component.css';

const ComplexComponent = () => {
  return (
    <div className="complex-component">
      <div className="section-header">
        <h2>О проекте</h2>
        <h2>
          Creative <span className="highlight">Technologist</span>
        </h2>
        <h2>
          Стек <span className="highlight">Технологий</span>
        </h2>
      </div>
      
      <div className="content-wrapper">
        {/* Левый блок */}
        <div className="left-block">
          <div className="card">
            <img src="path-to-icon.png" alt="e-Coupon" />
            <p>e-Coupon</p>
          </div>
          <p className="description">
          Привет! Меня зовут Дмитрий Горнаков, я - креативный технологист с опытом работы в графическом дизайне, фронтенд- и бэкенд-разработке, и машинном обучении. Моя миссия - обучать вас навыкам, которые помогут создавать инновационные проекты и строить карьеру в IT.
          </p>
          <div className="buttons">
          <a href="mailto:dmitri.gornakov@gmail.com"><button className="cta-button btn-green">Начать работать</button></a>
            {/* <button className="cta-button btn-purple">Начать работать</button> */}
          </div>
        </div>

        {/* Центральный блок */}
        <div className="center-block">
          <div className="card-row">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="card">
                <img src="path-to-icon.png" alt="e-Coupon" />
                <p>e-Coupon</p>
              </div>
            ))}
          </div>
          {/* <p className="description">
            Привет! Меня зовут Дмитрий Горнаков, я - креативный технологист с опытом работы в графическом дизайне, фронтенд- и бэкенд-разработке, и машинном обучении. Моя миссия - обучать вас навыкам, которые помогут создавать инновационные проекты и строить карьеру в IT.
          </p>
          <div className="buttons">
            <button className="cta-button btn-green">Начать работать</button>
            <button className="cta-button btn-purple">Начать работать</button>
          </div> */}
        </div>

        {/* Правый блок */}
        <div className="right-block">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="card">
              <img src="path-to-icon.png" alt="e-Coupon" />
              <p>e-Coupon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplexComponent;
