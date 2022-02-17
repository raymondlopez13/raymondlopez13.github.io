import React, { useEffect } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Landing from './components/Landing';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
