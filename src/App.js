import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
