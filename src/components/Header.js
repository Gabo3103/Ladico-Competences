
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="user-menu">
        <span className="username">User</span>
        <div className="dropdown">
          <button>☰</button>
          <ul className="dropdown-content">
            <li>Preferencias</li>
            <li>Cerrar sesión</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
