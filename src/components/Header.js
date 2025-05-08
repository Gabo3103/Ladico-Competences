import React, { useState } from 'react';
import '../style/Header.css';

function Header({ username = "User" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-right">
        <div className="user-menu" onClick={() => setOpen(!open)}>
          {username.split(' ')[0]} ▼
        </div>
        {open && (
          <div className="dropdown">
            <div className="dropdown-header">{username}</div>
            <ul>
            <li>Mi cuenta</li>
            <li>Mis certificaciones</li>
            <li>Ayuda</li>
            <li className="logout">🔌 Cerrar sesión</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

