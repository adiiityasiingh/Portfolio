import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Education from './components/Education';
import ThemeToggle from './components/common/ThemeToggle';
import './styles/theme.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 theme-transition">
     <ThemeToggle/>
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