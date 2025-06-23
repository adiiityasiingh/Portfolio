import { Calendar, Briefcase } from 'lucide-react';
import { useInView } from '../hooks/useInView';
const experiences = [
  {
    title: "Software Developer Intern",
    company: "Techno Billion AI",
    period: "Apr 2025 - Present",
    description: "Developed a comprehensive Inventory Management System for a Real Estate company using MongoDB, Express.js, Next.js, and Node.js, streamlining property listings and tracking. Built 20 + RESTful APIs to handle high - volume requests, and collaborated within Agile teams using Jira and Git . Implemented secure authentication and authorization workflows using JWT and OAuth2.0, and followed the MVCarchitecture pattern to enhance code modularity, maintainability, and scalability"
  },
  {
    title: "ReactJS Developer Intern",
    company: "Celebal Technologies",
    period: "May 2025 - Jun 2025",
    description: "Completed an intensive learning program on React.js, gaining hands-on experience in building scalable and component-based frontend applications. Developed and integrated modular, maintainable, and well-documented code across multiple frontend features, reducing future maintenance time by 30%."
  },
  {
    title: "Summer Undergraduate Research Intern (SURF)",
    company: "Indian Institute of Technology Delhi",
    period: "Jun 2024 - Aug 2024",
    description: "Worked with IoT devices for real-time data extraction and analysis, optimizing system efficiency and automation. Worked with advanced tensiometric sensors to analyze soil moisture and quality, aiding in precision agriculture."
  },

];

const Experience = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <div className="py-16 gradient-experience text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 ${isVisible ? 'animate-fade-right' : ''}`}>
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start animate-on-scroll ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`absolute left-8 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-blue-900 ${isVisible ? 'animate-scale' : ''}`}></div>
                <div className="ml-16 bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center text-blue-200">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center text-blue-200 mb-3">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {exp.company}
                  </div>
                  <p className="text-gray-200">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;