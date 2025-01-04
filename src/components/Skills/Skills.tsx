import { useInView } from '../../hooks/useInView';
import SkillCard from './SkillCard';
import Button from '../common/Button';
import { FileText } from 'lucide-react';
import { skills } from '../../data/skills';

const Skills = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <div className="py-16 gradient-skills text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className={`text-3xl font-bold ${isVisible ? 'animate-fade-right' : ''}`}>
          Skills & Technologies
        </h2>
        <Button 
            href="https://drive.google.com/file/d/17Tam7Xf5_d9nUUbfl2XUZTzx4nWNsQYu/view?usp=sharing" 
            icon={<FileText className="w-5 h-5" />}
          >
            View Resume
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              skill={skill}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;