import React from 'react';
import About from '../components/About';
import Community from '../components/Community';
import FinalCTA from '../components/FinalCTA';
import { Target, Eye, ShieldCheck, Sparkles, Box, Users, Briefcase, Rocket, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Cover Page Visual (Brochure Page 1/2 Style) */}
      <div className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-40"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full mb-8 animate-fade-in-up">
            <span className="text-[10px] font-black text-[#FF0000] uppercase tracking-[0.4em]">Brochure: Page 2 & 3</span>
          </div>
          <h1 className="oswald text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-10 animate-fade-in-up animation-delay-200">
            Vision & <br /><span className="text-gradient-red">Philosophy.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-xl md:text-2xl font-medium leading-relaxed animate-fade-in-up animation-delay-400">
            Dramantram Academy is a place for students who want to learn by doing. <br />
            <span className="text-white">Our Career-First approach bridge the gap between passion and professional expectations.</span>
          </p>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* Why Dramantram Academy Highlights (Brochure Page 4) */}
      <div className="py-32 relative bg-black reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="oswald text-4xl md:text-6xl font-black uppercase mb-20 text-center">Why <span className="text-red-600">Choose Us?</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 gloss-card rounded-3xl border-red-900/10 group">
              <Shield className="text-[#FFD700] mb-6" size={40} />
              <h3 className="oswald text-2xl font-bold uppercase mb-4">Unique Edge</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Learn directly in real studio environments using the same cameras and software used for commercial ads and films.
              </p>
            </div>
            <div className="p-10 gloss-card rounded-3xl border-red-900/10 group">
              <Sparkles className="text-red-600 mb-6" size={40} />
              <h3 className="oswald text-2xl font-bold uppercase mb-4">No Theory Overload</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We remove the fluff. Every hour spent in our Lucknow campus is an hour spent building skills that land real jobs.
              </p>
            </div>
            <div className="p-10 gloss-card rounded-3xl border-red-900/10 group">
              <Briefcase className="text-[#FFD700] mb-6" size={40} />
              <h3 className="oswald text-2xl font-bold uppercase mb-4">Agency Ties</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                As the educational branch of a working creative agency, we have the network to launch your career.
              </p>
            </div>
          </div>
        </div>
      </div>

      <About />
      
      {/* Student Journey (Training Method - Brochure Page 16) */}
      <section className="py-32 relative bg-black border-t border-red-900/10 reveal">
        <div className="absolute inset-0 bg-red-glow opacity-30"></div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="oswald text-4xl md:text-6xl font-black uppercase mb-16">The Student <span className="text-gradient-red">Journey.</span></h2>
          <div className="grid gap-8">
            {[
              { step: '01', title: 'Immersion', desc: 'Dive into real studio workflows and industry gear from Day 1.' },
              { step: '02', title: 'Mock Projects', desc: 'Execute professional-style briefs to sharpen your creative instincts.' },
              { step: '03', title: 'Portfolio Build', desc: 'Finalize a resume and showreel that proves you are studio-ready.' },
              { step: '04', title: 'Internship', desc: 'Direct support for internships and career placement in top studios.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-10 p-10 gloss-card rounded-[2rem] text-left hover:border-red-500 transition-all border-red-900/10">
                <div className="oswald text-6xl font-black text-red-600/30">{item.step}</div>
                <div>
                   <h4 className="oswald text-2xl font-black uppercase mb-2">{item.title}</h4>
                   <p className="text-gray-400 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Community />
      <FinalCTA />
    </div>
  );
};

export default AboutPage;