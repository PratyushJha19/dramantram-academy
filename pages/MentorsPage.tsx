import React from 'react';
import Mentors from '../components/Mentors';

const MentorsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#FFD700]/5 py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="oswald text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 animate-fade-in-up">
            Your <span className="text-[#FFD700]">Guides.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-medium animate-fade-in-up animation-delay-200">
            Learn from those who have built for the world's biggest brands. Our faculty is composed of active industry veterans.
          </p>
        </div>
      </div>
      <Mentors />
    </div>
  );
};

export default MentorsPage;