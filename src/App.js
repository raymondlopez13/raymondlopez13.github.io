import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
function App() {
  const [page, setPage] = useState('About Me');
  function renderPage() {
    switch(page) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'About Me':
        return <About />;
      default:
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
