
import React from 'react';
import CompetenceCard from './CompetenceCard';

const data = [
  {
    icon: '💻',
    title: 'Creación de contenidos digitales',
    description: 'Desarrollar contenidos utilizando herramientas digitales.'
  },
  {
    icon: '🔐',
    title: 'Seguridad',
    description: 'Aplicar medidas de seguridad en el entorno digital.'
  },
  {
    icon: '🧠',
    title: 'Resolución de problemas',
    description: 'Solucionar problemas técnicos y seleccionar herramientas digitales adecuadas.'
  }
];

function CompetenceList() {
  return (
    <div className="competence-list">
      {data.map((item, index) => (
        <CompetenceCard key={index} {...item} />
      ))}
    </div>
  );
}

export default CompetenceList;
