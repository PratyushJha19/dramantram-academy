
import React from 'react';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-red-radial opacity-30"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="gloss-card rounded-[3rem] p-10 md:p-20 lg:p-24 text-center border-white/5 bg-black/40 backdrop-blur-3xl">
          <div className="inline-block px-4 py-1.5 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full mb-10">
             <span className="text-[9px] md:text-[10px] font-black text-[#FF0000] uppercase tracking-[0.3em]">Limited seats for 2026 Cohort</span>
          </div>
          
          <h2 className="oswald text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-8 leading-[1] tracking-tighter">
            Start Your Creative <br /> <span className="text-gradient-red">Career Today</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't just dream about it. Join the community of storytellers. Your journey into the creative industry begins with a single step.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-16">
            <button className="px-10 py-5 bg-[#FF0000] text-white font-black uppercase tracking-widest text-xs rounded-xl yellow-btn-hover transition-all flex items-center justify-center gap-3">
              Apply Now <ArrowRight size={18} />
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl yellow-hover hover:bg-white/10 transition-all flex items-center justify-center gap-3">
               <Mail size={18} /> Enquiry Form
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {['No Hidden Fees', 'Scholarships Available', 'Placement Assistance'].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#00FF85]">
                <CheckCircle2 size={16} /> {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
