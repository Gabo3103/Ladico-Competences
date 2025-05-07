import React, { useState } from 'react';
import '../styles/CompetenceCard.css';


function CompetenceCard({ title = "Developing text documents", category = "CONTENT CREATION", level = 0.25 }) {
  const progressDegrees = level * 360;

  return (
    <div className="card-container">
      <div className="card-header">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
      </div>
      <div className="card-body">
        <div className="progress-circle">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#d3d6dd"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#19a8f8"
              strokeWidth="6"
              fill="none"
              strokeDasharray={`${progressDegrees} ${360}`}
              strokeDashoffset="90"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <p className="level-label">LEVEL</p>
          <p className="level-value">–</p>
        </div>
        <button className="resume-button">Resume</button>
      </div>
    </div>
  );
}

export default CompetenceCard;
