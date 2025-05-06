
import React from 'react';

function CompetenceCard({ icon, title, description }) {
  return (
    <div className="competence-card">
      <div className="icon">{icon}</div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CompetenceCard;
