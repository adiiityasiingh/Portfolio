import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: "Arduino and MPU6050 - Based Flight Controller",
    description: "-Developed a quadcopter flight controller using an ATmega328P microcontroller, managing over 2,000 lines of C++ Integrated an MPU6050 gyro and accelerometer sensor, enabling precise orientation tracking with an accuracy of ±0.01°",
    tech: ["IOT", "MERN", "C/C++", "Express","Socket.IO"],
    github: "https://github.com/adiiityasiingh/Flight-Controller",
    live: "https://drive.google.com/drive/folders/15e95dPk7ZqNHYBDVUcLxumnRBdEHZxpp?usp=sharing"
  },
  {
    title: "Live Tracking System",
    description: "Developed a real-time live tracking system using Socket.io, Node.js, Express.js, and EJS, enabling instant updates and seamless communication between clients and servers",
    tech: ["NodeJS", "ExpressJS", "Tailwind CSS","Socket.Io","JavaScript"],
    github: "https://github.com/adiiityasiingh/Livetracker",
    live: "https://task-manager-demo.com"
  },
  {
    title: "AutoCards",
    description: "Developed a responsive, full-stack front-end website using HTML, CSS, and JavaScript, incorporating NFC technology principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-dashboard-demo.com"
  }
];

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
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden animate-on-scroll ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-blue-200 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center text-blue-200 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;