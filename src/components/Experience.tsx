import { Calendar, Briefcase } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    title: "Summer Undergraduate Research Intern (SURF)",
    company: "Indian Institute of Technology Delhi",
    period: "Jun 2024 - Aug 2024",
    description: "Utilized advanced tensiometric sensors and hardware to accurately monitor soil quality and moisture levels, enabling precise environmental assessments for optimized plant growth conditions. "
  },
  {
    title: "React Developer",
    company: "Freelance",
    period: "2024-Present",
    description: "Designed and developed responsive and dynamic user interfaces using React.js and JavaScript, ensuring seamless user experiences across devices. Implemented reusable components and optimized frontend performance, resulting in 30% faster load times and improved application scalability."
  }
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