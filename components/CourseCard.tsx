
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group relative glass overflow-hidden rounded-sm transition-all duration-500 hover:border-[#FF0000]/50 hover:translate-y-[-8px]">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[#FF0000] text-xs font-bold uppercase tracking-[0.2em]">{course.duration}</span>
          <ArrowUpRight className="text-white/20 group-hover:text-[#FFD700] transition-colors" size={20} />
        </div>
        
        <h4 className="oswald text-2xl font-bold uppercase mb-3 group-hover:text-[#FF0000] transition-colors">{course.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {course.description}
        </p>
        
        <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-white/10 group-hover:border-[#FF0000] pb-1 transition-all">
          View Syllabus
        </button>
      </div>

      {/* Industrial accent */}
      <div className="absolute top-4 right-4 text-[4rem] font-black text-white/5 pointer-events-none select-none oswald">
        0{course.id}
      </div>
    </div>
  );
};

export default CourseCard;
