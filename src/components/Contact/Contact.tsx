import React from 'react';
import { useInView } from '../../hooks/useInView';
import ContactForm from './ContactForm';

const Contact = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <div className="py-16 w-full gradient-contact text-white" ref={ref}>
      <div className="w-full mx-auto px-4">
        <h2 className={`text-3xl text-center font-bold mb-8 ${isVisible ? 'animate-fade-right' : ''}`}>
          Get in Touch
        </h2>

        <div className=" ">
          <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-xl text-center font-semibold mb-6">Send me a message</h3>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>

          <div 
            className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;