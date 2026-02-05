import React from 'react';
import { Target, Sparkles, Users, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="px-4 md:px-6 relative overflow-hidden bg-black py-32 border-y border-red-900/10 reveal">
      <div className="absolute inset-0 bg-red-radial opacity-30"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div className="relative group order-last md:order-first">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 blur-[60px] rounded-full"></div>
          <div className="relative gloss-card p-3 rounded-[3rem] border-red-500/20 group-hover:border-red-500/50 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              alt="Learning Philosophy" 
              className="w-full rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 p-10 bg-[#FF0000] text-white rounded-3xl shadow-2xl hidden lg:block rotate-3 group-hover:rotate-0 transition-transform">
               <div className="oswald text-5xl font-black">10+</div>
               <div className="text-[10px] font-bold uppercase tracking-widest mt-2">Years of Agency <br />Experience</div>
            </div>
          </div>
        </div>
        
        <div className="text-center md:text-left">
          <div className="inline-block text-[#FF0000] oswald uppercase tracking-[0.5em] text-xs mb-6 font-black py-1 px-4 bg-red-500/10 border border-red-500/20 rounded-full">
            Our Philosophy
          </div>
          <h2 className="oswald text-4xl md:text-7xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">
            Beyond Traditional <br /><span className="text-gradient-red">Education.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">
            Dramantram Academy bridges the gap between raw creative talent and what the industry actually expects. 
            Here, learning doesn’t stop at theory. You train in real studio environments and learn directly from professionals who do this work every day.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Target, text: "Hands-on training using real gear" },
              { icon: Users, text: "Direct guidance from expert creators" },
              { icon: Sparkles, text: "Assignments & live-style productions" },
              { icon: Briefcase, text: "Internship & career support" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-red-500/30 hover:bg-red-500/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <item.icon size={20} />
                </div>
                <span className="text-gray-300 font-bold uppercase tracking-wider text-[11px]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;