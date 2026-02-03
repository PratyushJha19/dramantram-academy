
import React from 'react';
import { Star, PlayCircle } from 'lucide-react';

const AlumniSpeak: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-red-radial opacity-15"></div>
      <div className="absolute inset-0 bg-glow-bl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-yellow-radial opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="oswald text-5xl font-black uppercase mb-16">Alumni <span className="text-[#FFD700]">Speak</span></h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="gloss-card p-6 rounded-2xl flex items-center gap-6 text-left group hover:bg-[#FFD700]/5 transition-colors border-[#FFD700]/5 hover:border-[#FFD700]/30">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-[#FFD700] overflow-hidden shrink-0 transition-colors">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Alumni" />
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#FFD700" stroke="none" />)}
                  </div>
                  <h4 className="font-bold mb-1 group-hover:text-[#FFD700] transition-colors">Rajesh Kumar</h4>
                  <p className="text-xs text-gray-500 italic">"The Micro-MBA changed how I look at design as a <span className="text-[#FFD700]">business</span>."</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative gloss-card p-6 rounded-3xl border-[#FFD700]/10 group">
             <div className="aspect-video relative rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:opacity-80 transition-opacity" alt="Feedback Video" />
                <PlayCircle size={64} className="text-[#FFD700] relative z-10 hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]" />
             </div>
             <div className="mt-4 text-left">
               <h4 className="oswald text-xl font-bold uppercase group-hover:text-[#FFD700] transition-colors">Success Story #01</h4>
               <p className="text-xs text-gray-500">Hear from our latest cohort graduates about their experience.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSpeak;
