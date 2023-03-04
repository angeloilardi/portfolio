
import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
