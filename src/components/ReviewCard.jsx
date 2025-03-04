import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ reviewText, caseLink, linkName }) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <p className="review-text">"{reviewText}"</p>
        <a href={caseLink} target="_blank" rel="noopener noreferrer" className="review-link">
          {linkName}
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
