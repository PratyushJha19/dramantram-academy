import React from 'react';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="px-4 md:px-6 relative overflow-hidden py-32 bg-black">
      {/* Intense Red Background Flow */}
      <div className="absolute inset-0 bg-red-radial opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF0000] to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="gloss-card rounded-[4rem] p-12 md:p-24 text-center border-red-500/20 bg-black/60 backdrop-blur-3xl shadow-[0_0_100px_rgba(255,0,0,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
          
          <div className="inline-block px-6 py-2 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full mb-10">
             <span className="text-[11px] font-black text-[#FF0000] uppercase tracking-[0.4em]">Ready to start?</span>
          </div>
          
          <h2 className="oswald text-6xl md:text-9xl font-black uppercase mb-10 leading-[0.8] tracking-tighter">
            Take the <br /> <span className="text-gradient-red">First Step.</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-2xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Don't just dream about a creative career. Build it with people who actually work in the industry. <br />
            <span className="text-white">Enrollment for the 2026 Batch is now live.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <a href="#apply" className="px-14 py-6 bg-[#FF0000] text-white font-black uppercase tracking-[0.2em] text-[13px] rounded-2xl hover:shadow-[0_0_50px_rgba(255,0,0,0.6)] hover:scale-105 transition-all flex items-center justify-center gap-3">
              Apply Now <ArrowRight size={20} />
            </a>
            <button className="px-14 py-6 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[13px] rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
               <Mail size={20} className="group-hover:rotate-12 transition-transform" /> Enquiry Form
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12 border-t border-white/5">
            {[
              { text: 'Hands-on Learning', color: '#FF0000' },
              { text: 'Agency Mentorship', color: '#FF0000' },
              { text: 'No Theory Overload', color: '#FFD700' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest" style={{ color: item.color }}>
                <CheckCircle2 size={18} /> {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;