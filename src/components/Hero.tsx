import TypewriterText from './Typewritertext';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, } from 'lucide-react';
import '../styles/gradients.css';
import '../styles/animations.css';

const Hero = () => {
  return (
    <div className="min-h-screen gradient-bg flex flex-col md:flex-row items-center justify-center p-8">
      <div className="md:w-1/2 space-y-6">
      <h1 className="text-5xl font-bold text-white">
          Hi, I'm{' '}
          <TypewriterText 
            text="Aditya Singh" 
            className="gradient-text"
            delay={100}
          />
        </h1>
        <p className="text-xl text-gray-300 animate-fade-right delay-100">
        A highly motivated and technically skilled developer with hands-on experience in both frontend and backend technologies, along with strong expertise in data structures and algorithms.
        </p>
        
        <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3 animate-fade-up delay-200">
            <Code2 className="w-5 h-5 text-gray-300" />
            <a href="www.naukri.com/code360/profile/adiiityasiingh" className="text-blue-300 hover:text-blue-200 transition-colors">
              Code360/adiiityasiingh
            </a>
          </div>
          
        <div className="flex items-center space-x-3 animate-fade-up delay-200">
            <Github className="w-5 h-5 text-gray-300" />
            <a href="https://github.com/yourusername" className="text-blue-300 hover:text-blue-200 transition-colors">
              github.com/adiiityasiingh
            </a>
          </div>
          <div className="flex items-center space-x-3 animate-fade-up delay-200">
            <Linkedin className="w-5 h-5 text-gray-300" />
            <a href="https://linkedin.com/in/yourusername" className="text-blue-300 hover:text-blue-200 transition-colors">
              linkedin.com/in/adiiityasiingh
            </a>
          </div>
          <div className="flex items-center space-x-3 animate-fade-up delay-300">
            <Mail className="w-5 h-5 text-gray-300" />
            <a href="mailto:your.email@example.com" className="text-blue-300 hover:text-blue-200 transition-colors">
              ad69832@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3 animate-fade-up delay-300">
            <Phone className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300">+91 9064496762</span>
          </div>
          <div className="flex items-center space-x-3 animate-fade-up delay-400">
            <MapPin className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300">Kolkata, WB, IN</span>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img 
         src="https://i.ibb.co/wWv1xrr/hero-image.jpg"
          alt="Professional"
          className="rounded-full shadow-xl max-w-80 mx-auto animate-fade-up delay-200"
        />
      </div>
    </div>
  );
};

export default Hero;