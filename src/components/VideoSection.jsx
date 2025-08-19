import React from "react";
import "./VideoSection.css";

const VideoSection = ({ title, videoUrl }) => {
  return (
    <div className="video-section">
      <h2 className="video-title">{title}</h2>
      <div className="video-container">
        <iframe 
          src={videoUrl} 
          title={title} 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
