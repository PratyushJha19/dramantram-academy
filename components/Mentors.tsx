import React from 'react';
import { Linkedin, Twitter, Globe, ArrowUpRight } from 'lucide-react';

const MENTORS = [
  {
    name: 'Juned Ali',
    role: 'Founder & Lead Creator',
    bio: 'Industry veteran with 10+ years experience in brand strategy & creative production.',
    img: 'https://i.pravatar.cc/300?img=11',
    color: '#FF0000'
  },
  {
    name: 'Mohd Qaiser',
    role: 'Co-Founder & Visual Lead',
    bio: 'Cinematographer and master of visual storytelling with a focus on commercial films.',
    img: 'https://i.pravatar.cc/300?img=12',
    color: '#FF0000'
  },
  {
    name: 'Eshika Duggal',
    role: 'SDR & Career Coach',
    bio: 'Specialist in bridging the gap between student projects and professional employment.',
    img: 'https://i.pravatar.cc/300?img=47',
    color: '#FF0000'
  },
  {
    name: 'Dr. Sonal',
    role: 'Strategy Mentor',
    bio: 'Ph.D. in Communication, ensuring deep psychological impact in creative outputs.',
    img: 'https://i.pravatar.cc/300?img=45',
    color: '#FF0000'
  }
];

const Mentors: React.FC = () => {
  return (
    <section className="py-32 bg-black relative border-t border-red-900/10 reveal">
      <div className="absolute inset-0 bg-red-radial opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-24">
          <div className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.5em] mb-6">FACULTY & EXPERTS</div>
          <h2 className="oswald text-5xl md:text-8xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">Learn from <br /><span className="text-gradient-red">Working Pros.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Our mentors don't just teach—they do. You'll be guided by creators who are active in the commercial industry every single day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {MENTORS.map((m, i) => (
            <div key={i} className="gloss-card p-10 rounded-[2.5rem] group relative border-red-500/10 hover:border-red-500/50">
              <div className="relative mb-10 mx-auto w-40 h-40">
                <div className="absolute -inset-4 rounded-full border border-red-500/10 group-hover:border-red-500/40 group-hover:scale-105 transition-all duration-700"></div>
                <img src={m.img} alt={m.name} className="w-full h-full rounded-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl" />
              </div>

              <h3 className="oswald text-2xl font-black uppercase mb-2 group-hover:text-[#FF0000] transition-colors">{m.name}</h3>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFD700] mb-6">{m.role}</div>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10">
                {m.bio}
              </p>

              <div className="flex justify-center gap-6 pt-6 border-t border-white/5">
                <Linkedin size={18} className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
                <Twitter size={18} className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
                <Globe size={18} className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <button className="px-10 py-4 border border-red-500/20 text-[#FFD700] oswald font-bold uppercase tracking-[0.3em] text-[11px] rounded-xl hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all group">
            Meet the Whole Squad <ArrowUpRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;