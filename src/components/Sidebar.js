
import React from 'react';

function Sidebar({ onNavigate }) {
  return (
    <aside className="sidebar">
      <h2>LADICO</h2>
      <nav>
        <ul>
          <li onClick={() => onNavigate('competencias')}>Competencias</li>
          <li onClick={() => onNavigate('progreso')}>Mi progreso</li>
          <li onClick={() => onNavigate('explorar')}>Explorar</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
