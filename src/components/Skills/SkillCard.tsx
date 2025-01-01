import { SkillItem } from '../../types/skill';
import TechLogo from './TechLogo';

interface SkillCardProps {
  skill: SkillItem;
  isVisible: boolean;
  index: number;
}

const SkillCard = ({ skill, isVisible, index }: SkillCardProps) => {
  return (
    <div 
      className={`group bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden 
        transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
        ${isVisible ? 'animate-on-scroll visible' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={skill.categoryImage} 
          alt={skill.category}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors">
          {skill.category}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {skill.items.map((item, i) => (
            <TechLogo 
              key={i}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;