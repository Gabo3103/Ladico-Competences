import React from 'react';
import '../styles/CompetenceCard.css';

function CompetenceCard({ title = "Developing text documents", category = "CONTENT CREATION", level = 0.25 }) {
  const progressDegrees = level * 360;

  const categoryColors = {
    "INFORMATION AND DATA": "linear-gradient(180deg, #f26a2e 0%, #f7873d 100%)",
    "COMMUNICATION AND COLLABORATION": "linear-gradient(180deg, #1cb57a 0%, #27b889 100%)",
    "CONTENT CREATION": "linear-gradient(180deg, #1da1f2 0%, #2996f5 100%)",
    "SECURITY": "linear-gradient(180deg, #8e44ad 0%, #9b59b6 100%)",
    "PROBLEM SOLVING": "linear-gradient(180deg, #34495e 0%, #2c3e50 100%)",
  };

  return (
    <div className="card-container">
      <div
        className="card-header"
        style={{ background: categoryColors[category.toUpperCase()] || '#ccc' }}
      >
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

        <button className="resume-button">
          {level === 0 ? "Start" : "Resume"}
        </button>
      </div>
    </div>
  );
}

export default CompetenceCard;
