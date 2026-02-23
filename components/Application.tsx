import React from "react";
import { ExternalLink } from "lucide-react";

const Application: React.FC = () => {
  return (
    <section id="apply" className="py-32 relative">
      <div className="absolute inset-0 bg-[#FF0000] z-0"></div>
      <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="oswald text-black text-6xl md:text-8xl font-black uppercase mb-8 leading-none tracking-tighter">
          Ready to <br />
          Execute?
        </h2>
        <p className="text-black/80 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto italic">
          Application for the Summer 2024 Batch is now open. Limited slots for
          candidates who show true potential.
        </p>

        <a
          href="https://forms.gle/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white text-xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
        >
          Access Google Form{" "}
          <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <div className="mt-12 flex justify-center gap-10">
          <div className="text-black text-center">
            <div className="text-3xl font-black oswald">12</div>
            <div className="text-xs font-bold uppercase tracking-tighter">
              Slots Left
            </div>
          </div>
          <div className="text-black text-center">
            <div className="text-3xl font-black oswald">15</div>
            <div className="text-xs font-bold uppercase tracking-tighter">
              Days Left
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
