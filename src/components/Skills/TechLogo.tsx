import React from 'react';
import { 
  // ReactIcon, 
  Network,
  BrainCog,
  SquareAsterisk,
  PackageSearchIcon,
  TriangleIcon,
  DatabaseBackupIcon,
  DatabaseZapIcon,
  FileType2, 
  BetweenHorizonalStartIcon,
  Palette,
  Server,
  FileCode2,
  PointerIcon,  // Changed from Python to Code2
  Database,
  GitBranch,
  ActivityIcon,
  Cloud,
  ComputerIcon,
} from 'lucide-react';


const iconMap: Record<string, React.ReactNode> = {
  "React": <BrainCog className="w-8 h-8" />,
  "Appwrite": <PackageSearchIcon className="w-8 h-8" />,
  "CSS": <SquareAsterisk className="w-8 h-8" />,
  "JavaScript": <FileType2 className="w-8 h-8" />,
  "DSA": <Network className="w-8 h-8" />,
  "SQL": <DatabaseZapIcon className="w-8 h-8"/>,
  "OS": <ActivityIcon className="w-8 h-8" />,
  "Tailwind": <Palette className="w-8 h-8" />,
  "Node.js": <Server className="w-8 h-8" />,
  "Express": <FileCode2 className="w-8 h-8" />,
  "DBMS": <BetweenHorizonalStartIcon className="w-8 h-8" />, // Using Code2 icon instead
  "MongoDB": <Database className="w-8 h-8" />,
  "Git": <GitBranch className="w-8 h-8" />,
  "VS Code": <ComputerIcon className="w-8 h-8" />,
  "AWS": <Cloud className="w-8 h-8" />,
  "Vercel": <TriangleIcon className="w-8 h-8" />,
  "OOPS": <PointerIcon className="w-8 h-8" />
};

interface TechLogoProps {
  name: string;
  logo?: string;
}

const TechLogo = ({ name }: TechLogoProps) => {
  return (
    <div className="group flex flex-col items-center space-y-2">
      <div className="w-12 h-12 flex items-center justify-center p-2 
        bg-white/5 rounded-lg transform transition-all duration-300 
        group-hover:scale-110 group-hover:bg-white/10 
        hover:rotate-6 hover:shadow-lg">
        <div className="text-blue-300 group-hover:text-blue-200 transition-colors">
          {iconMap[name]}
        </div>
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
};

export default TechLogo;