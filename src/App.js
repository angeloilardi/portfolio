
import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import ProjectsTab from './components/pages/ProjectsTab';
import Contacts from './components/pages/Contacts';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projectsTab" element={<ProjectsTab />} />
          <Route path='contact' element={<Contacts /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
