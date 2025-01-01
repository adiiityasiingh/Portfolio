import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Skills/>
      <Experience />
      <Projects />
      <Education/>
      <Contact />
    </div>
  );
}

export default App;