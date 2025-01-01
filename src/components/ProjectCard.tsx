import { Github, ExternalLink } from 'lucide-react';
import { ProjectType } from '../types/project';

interface ProjectCardProps {
  project: ProjectType;
  isVisible: boolean;
  index: number;
}

const ProjectCard = ({ project, isVisible, index }: ProjectCardProps) => {
  return (
    <div 
      className={`group bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden 
        transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
        animate-on-scroll ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-200 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm
                transform transition-all duration-300 hover:scale-110 hover:bg-blue-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-auto">
          <a 
            href={project.github}
            className="flex items-center text-blue-200 hover:text-white transition-all duration-300
              transform hover:translate-y-[-2px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 mr-2" />
            <span className="border-b border-transparent group-hover:border-blue-200">
              Code
            </span>
          </a>
          <a 
            href={project.live}
            className="flex items-center text-blue-200 hover:text-white transition-all duration-300
              transform hover:translate-y-[-2px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            <span className="border-b border-transparent group-hover:border-blue-200">
              Live Demo
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;