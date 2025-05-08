
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CompetenceList from './components/CompetenceList';
import CompetenceIntro from './components/CompetenceIntro';
import Footer from './components/Footer';
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
        {currentPage === 'competencias' && <CompetenceIntro />}
        {content}
        <Footer />
      </div>
    </div>
  );
}

export default App;
