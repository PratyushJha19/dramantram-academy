
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="px-4 md:px-6 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-red-radial opacity-15"></div>
      <div className="absolute inset-0 bg-glow-bl opacity-40"></div>
      <div className="absolute inset-0 bg-glow-tr-yellow opacity-10"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="relative order-last md:order-first">
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#FFD700] z-0 opacity-50"></div>
          <div className="gloss-card p-2 rounded-2xl relative z-10 border-[#FFD700]/20">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000" 
              alt="About Academy" 
              className="w-full rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#FF0000]/40 z-0"></div>
        </div>
        
        <div className="text-center md:text-left">
          <h2 className="oswald text-[#FFD700] uppercase tracking-[0.4em] text-xs mb-4 font-bold">Our Philosophy</h2>
          <h3 className="oswald text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight">Beyond Traditional <br /><span className="text-gradient-red">Education.</span></h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-medium">
            Dramantram Academy helps bridge the gap between <span className="text-[#FFD700]">raw creative talent</span> and real industry demands. We offer a curriculum that focuses on practical, studio-ready readiness.
          </p>
          <ul className="space-y-4 inline-block md:block text-left">
            {[
              "Industry-Standard Equipment",
              "Mentorship by Leading Creators",
              "Live Production Exposure",
              "Placement at Dramantram Studio"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-bold uppercase tracking-wider text-[11px] group">
                <span className="w-1.5 h-1.5 bg-[#FFD700] rotate-45 group-hover:scale-150 group-hover:shadow-[0_0_10px_#FFD700] transition-all"></span>
                <span className="group-hover:text-[#FFD700] transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
