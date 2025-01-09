import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed text-[#0ffbfd]" style={{ backgroundImage: 'url("/Portfolio Background.png")' }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
