
import React from 'react';

function Sidebar({ onNavigate, currentPage }) {

  return (
    <aside className="sidebar">
  <h2>LADICO</h2>
  <nav>
    <ul>
      <li
        className={currentPage === 'competencias' ? 'active' : ''}
        onClick={() => onNavigate('competencias')}
      >
        Competencias
      </li>
      <li
        className={currentPage === 'progreso' ? 'active' : ''}
        onClick={() => onNavigate('progreso')}
      >
        Mi progreso
      </li>
      <li
        className={currentPage === 'explorar' ? 'active' : ''}
        onClick={() => onNavigate('explorar')}
      >
        Explorar
      </li>
    </ul>
  </nav>
</aside>

  );
}

export default Sidebar;
