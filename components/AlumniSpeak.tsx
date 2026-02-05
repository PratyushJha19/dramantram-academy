import React from 'react';
import { Star, PlayCircle } from 'lucide-react';

const AlumniSpeak: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black reveal">
      <div className="absolute inset-0 bg-red-radial opacity-15"></div>
      <div className="absolute inset-0 bg-glow-bl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="oswald text-5xl font-black uppercase mb-16">Alumni <span className="text-gradient-red">Speak.</span></h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="gloss-card p-6 rounded-2xl flex items-center gap-6 text-left group hover:bg-red-600/5 transition-all duration-500 border-red-900/10 hover:border-red-500/30">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-red-500 overflow-hidden shrink-0 transition-all duration-500 group-hover:scale-110">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Alumni" />
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#FFD700" stroke="none" className="group-hover:scale-125 transition-transform duration-500" />)}
                  </div>
                  <h4 className="font-bold mb-1 text-white group-hover:text-red-500 transition-colors">Rajesh Kumar</h4>
                  <p className="text-xs text-gray-500 italic">"The Micro-MBA changed how I look at design as a <span className="text-red-500">business</span>."</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative gloss-card p-6 rounded-[2.5rem] border-red-500/10 group shadow-2xl">
             <div className="aspect-video relative rounded-3xl overflow-hidden bg-gray-950 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" alt="Feedback Video" />
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                  <PlayCircle size={80} className="text-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]" />
                </div>
             </div>
             <div className="mt-8 text-left px-4">
               <h4 className="oswald text-2xl font-black uppercase group-hover:text-red-500 transition-colors">Success Story #01</h4>
               <p className="text-sm text-gray-500 font-medium">Hear from our latest cohort graduates about their high-impact experience.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSpeak;