import { useInView } from '../hooks/useInView';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "Jadavpur University",
    location: "Kolkata, West Bengal, India",
    period: "Aug 2022 - Jun 2026",
    description: "Research Project in Artificial Intelligence and Machine Learning"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Guru Teg Bahadur Public School",
    location: "Durgapur, West Bengal, India",
    period: "2019 - 2021",
    description: "Science stream with Computer Science"
  }
];

const Education = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <div className="py-16 gradient-education text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 ${isVisible ? 'animate-fade-right' : ''}`}>
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:scale-102 hover:shadow-2xl ${
                isVisible ? 'animate-on-scroll visible' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/50 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-200" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-200 mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-gray-300 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;