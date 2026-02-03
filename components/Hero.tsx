
import React from 'react';
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-black">
      {/* Premium Red & Yellow Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FF0000]/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-[#FFD700]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF0000]/10 blur-[100px] rounded-full"></div>
      <div className="absolute inset-0 bg-red-radial opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#FFD700]/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-pulse"></span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#FFD700]">Admissions Open 2026</span>
          </div>
          
          <h1 className="oswald text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[1] tracking-tighter mb-6">
            Turn Your <br />
            <span className="text-gradient-red">Creativity</span> <br />
            Into a Career
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 max-w-lg mb-10 leading-relaxed font-medium mx-auto lg:mx-0">
            Master <span className="text-[#FFD700]">industry-relevant</span> creative skills with hands-on training, expert mentorship, and real-world exposure. Your journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#000000] border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all flex items-center justify-center gap-3 group">
              Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-[#FFD700]/50 text-[#FFD700] font-bold uppercase tracking-widest rounded-xl hover:text-white hover:border-[#FFD700] hover:bg-[#FFD700]/20 transition-all flex items-center justify-center gap-3 group">
              <Download size={18} className="group-hover:scale-110 transition-transform" /> Download Brochure
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-2.5">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+14}`} alt="Student" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-black bg-[#FFD700] flex items-center justify-center text-[10px] text-black font-black">
                +2k
              </div>
            </div>
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              Students <span className="text-[#FFD700]">Enrolled</span>
            </div>
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="relative gloss-card p-2 md:p-3 rounded-3xl overflow-hidden border-[#FFD700]/20">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" 
                alt="Futuristic Abstract Creative" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 md:left-8 md:bottom-8 glass-card px-5 py-4 rounded-2xl border-[#FFD700]/30 flex items-center gap-4 animate-float">
               <div className="w-10 h-10 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                 <CheckCircle2 className="text-[#FFD700]" size={20} />
               </div>
               <div>
                 <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">Placement Track</div>
                 <div className="text-lg md:text-xl font-black oswald text-white">98% Career <span className="text-[#FFD700]">Success</span></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
