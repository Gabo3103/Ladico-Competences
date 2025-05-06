
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CompetenceList from './components/CompetenceList';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <CompetenceList />
      </div>
    </div>
  );
}

export default App;
