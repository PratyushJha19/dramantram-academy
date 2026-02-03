
import React from 'react';
import { Linkedin, Twitter, Github, Globe, ArrowUpRight } from 'lucide-react';

const MENTORS = [
  {
    name: 'Sarah Jenkins',
    role: 'DESIGN LEAD',
    bio: '10+ Years Exp. Ex-Google, Apple Design Award Winner',
    img: 'https://i.pravatar.cc/300?img=32',
    color: '#FFD700'
  },
  {
    name: 'David Chen',
    role: 'VFX SUPERVISOR',
    bio: '12+ Years Exp. Worked on Marvel & Netflix Series',
    img: 'https://i.pravatar.cc/300?img=68',
    color: '#FF0000'
  },
  {
    name: 'Elena Rodriguez',
    role: 'UX RESEARCHER',
    bio: '8+ Years Exp. Specializing in Accessible Design',
    img: 'https://i.pravatar.cc/300?img=44',
    color: '#FFD700'
  },
  {
    name: 'Marcus Johnson',
    role: '3D ANIMATOR',
    bio: '9+ Years Exp. Character Animation Expert',
    img: 'https://i.pravatar.cc/300?img=12',
    color: '#FF0000'
  }
];

const Mentors: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-red-radial opacity-15"></div>
      <div className="absolute inset-0 bg-glow-bl opacity-20"></div>
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-glow-tr-yellow opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <div className="text-[10px] font-bold text-[#FFD700] uppercase tracking-[0.5em] mb-4">EXPERT GUIDANCE</div>
          <h2 className="oswald text-5xl font-black uppercase mb-6">Learn from Industry Leaders</h2>
          <p className="text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Our mentors are active professionals working with top studios, agencies, and production houses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((m, i) => (
            <div key={i} className="gloss-card p-8 rounded-2xl group relative border-[#FFD700]/10">
              <a href="#" className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 hover:bg-[#FFD700]/20 text-gray-500 hover:text-[#FFD700] transition-all">
                <Linkedin size={18} />
              </a>
              
              <div className="relative mb-6 mx-auto w-32 h-32">
                <div className="absolute inset-0 rounded-full border-2 border-[#FFD700]/10 group-hover:border-[#FFD700] group-hover:scale-110 transition-transform duration-500"></div>
                <img src={m.img} alt={m.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>

              <h3 className="oswald text-xl font-bold uppercase mb-1 group-hover:text-[#FFD700] transition-colors">{m.name}</h3>
              <div className="text-[10px] font-black uppercase tracking-widest mb-4" style={{ color: m.color }}>{m.role}</div>
              <p className="text-gray-500 text-xs font-medium leading-relaxed mb-8">
                {m.bio}
              </p>

              <div className="flex justify-center gap-4 text-gray-600">
                <Twitter size={16} className="hover:text-[#FFD700] cursor-pointer transition-colors" />
                <Globe size={16} className="hover:text-[#FFD700] cursor-pointer transition-colors" />
                <Github size={16} className="hover:text-[#FFD700] cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <button className="mt-16 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b border-[#FFD700]/20 pb-2 hover:border-[#FFD700] hover:text-[#FFD700] transition-all group text-gray-400">
          View All Faculty Members <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Mentors;
