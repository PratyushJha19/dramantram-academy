
import React from 'react';
import { Figma, Video, PenTool, CheckCircle2 } from 'lucide-react';

const COURSES = [
  {
    id: '1',
    category: 'DESIGN',
    title: 'Visual Communication',
    duration: '12 Months',
    desc: 'Master the art of graphic design, branding, and visual storytelling using industry-standard tools.',
    features: ['Adobe Creative Suite Mastery', 'Brand Identity Projects'],
    color: '#FFD700',
    icon: PenTool
  },
  {
    id: '2',
    category: 'DIGITAL',
    title: 'UI/UX Design',
    duration: '6 Months',
    desc: 'Learn to design intuitive user interfaces and seamless experiences for web and mobile applications.',
    features: ['Figma & Prototyping', 'User Research & Testing'],
    color: '#FF0000',
    icon: Figma
  },
  {
    id: '3',
    category: 'MOTION',
    title: 'Animation & VFX',
    duration: '10 Months',
    desc: 'Bring static designs to life through motion graphics, 2D animation, and visual effects.',
    features: ['After Effects & Premiere', '3D Modeling Basics'],
    color: '#FFD700',
    icon: Video
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-red-radial opacity-20"></div>
      <div className="absolute inset-0 bg-glow-tr-yellow opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <div className="text-[10px] font-bold text-[#FFD700] uppercase tracking-[0.5em] mb-4">OUR PROGRAMS</div>
          <h2 className="oswald text-5xl md:text-6xl font-black uppercase mb-6">Master <span className="text-[#FF0000]">Creative</span> Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Choose from our specialized programs designed to transform your passion into a professional career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="group relative gloss-card rounded-3xl p-8 hover:border-[#FFD700]/40 transition-all duration-500 flex flex-col items-start text-left">
              <div className="absolute top-6 right-8 text-[10px] font-bold bg-[#FFD700]/10 px-3 py-1 rounded-full text-[#FFD700] border border-[#FFD700]/20">
                {course.duration}
              </div>
              
              <div className="mb-8 p-4 rounded-2xl bg-white/5 group-hover:bg-[#FFD700]/10 transition-transform duration-500">
                <course.icon className="text-white group-hover:text-[#FFD700] transition-colors" size={40} strokeWidth={1.5} />
              </div>

              <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: course.color }}>{course.category}</div>
              <h3 className="oswald text-3xl font-bold uppercase mb-4 text-white group-hover:text-[#FFD700] transition-colors">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {course.desc}
              </p>

              <div className="space-y-3 mb-10 w-full">
                {course.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-300">
                    <CheckCircle2 size={14} className="text-[#FFD700]" />
                    {f}
                  </div>
                ))}
              </div>

              <button className="mt-auto w-full py-4 border border-white/10 rounded-xl font-bold uppercase tracking-widest text-xs group-hover:bg-[#FFD700] group-hover:text-black transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
