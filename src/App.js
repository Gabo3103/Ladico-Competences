
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CompetenceList from './components/CompetenceList';
import Progreso from './pages/Progreso';
import Explorar from './pages/Explorar';


function App() {
  const [currentPage, setCurrentPage] = useState('competencias');

  let content;
  switch (currentPage) {
    case 'progreso':
      content = <Progreso />;
      break;
    case 'explorar':
      content = <Explorar />;
      break;
    default:
      content = <CompetenceList />;
  }
  return (
    <div className="app">
      <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
      <div className="main-content">
        <Header />
        {content}
      </div>
    </div>
  );
}

export default App;
