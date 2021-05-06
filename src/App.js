import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
function App() {
  const [page, setPage] = useState('About');
  function renderPage() {
    console.log(page);
    switch(page) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact': 
        return '';
      case 'Resume':
        return '';
      case 'About Me':
        return <About />;
    }
  }
  return (
    <div className="">
      <Nav
        page={page}
        setPage={setPage}
        renderPage={renderPage}
      />
      {renderPage()}
    </div>
  );
}

export default App;
