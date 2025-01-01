import { useInView } from '../../hooks/useInView';
import SkillCard from './SkillCard';
import { skills } from '../../data/skills';

const Skills = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <div className="py-16 gradient-skills text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 ${isVisible ? 'animate-fade-right' : ''}`}>
          Skills & Technologies
        </h2>
        
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