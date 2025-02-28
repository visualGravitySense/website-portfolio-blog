import React from "react";
import "./ReviewCard.css";


const ReviewCard = ({ reviewText, caseLink, bgImage }) => {
  return (
    <div className="review-card" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
      <div className="review-content">
        <p className="review-text">"{reviewText}"</p>
        <a href={caseLink} target="_blank" rel="noopener noreferrer" className="review-link">
        Смотреть кейс →
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;