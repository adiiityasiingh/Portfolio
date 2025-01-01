import { Github, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <div className="py-16 gradient-projects text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 ${isVisible ? 'animate-fade-right' : ''}`}>
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;