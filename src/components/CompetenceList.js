
import React from 'react';
import CompetenceCard from './CompetenceCard';

const data = [
  {
    category: 'CONTENT CREATION',
    title: 'Creación de contenidos digitales',
    level: 0,
  },
  {
    category: 'SECURITY',
    title: 'Seguridad',
    level: 0,
  },
  {
    category: 'PROBLEM SOLVING',
    title: 'Resolución de problemas',
    level: 0,
  },
  {
    category: 'INFORMATION AND DATA',
    title: 'Data management',
    level: 0,
  },
  {
    category: 'COMMUNICATION AND COLLABORATION',
    title: 'Interacting',
    level: 0,
  },
];


function CompetenceList() {
  return (
    <div className="competence-list">
      {data.map((item, index) => (
        <CompetenceCard
          key={index}
          category={item.category}
          title={item.title}
          level={item.level}
        />
      ))}
    </div>
  );
}

export default CompetenceList;
