import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;