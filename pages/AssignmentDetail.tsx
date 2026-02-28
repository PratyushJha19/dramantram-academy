import React from "react";
import { useParams, Link } from "react-router-dom";
import assignmentsData from "../data/assignments.json";
import { ArrowLeft, Cpu, Target, Award, PlayCircle } from "lucide-react";

const AssignmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = assignmentsData.find((a) => a.id === id);

  if (!data)
    return (
      <div className="pt-40 text-center text-white oswald uppercase tracking-widest">
        Assignment Not Found
      </div>
    );

  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-900/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 relative z-10">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FFD700] transition-all mb-8 uppercase text-[10px] font-black tracking-[0.3em] group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Portfolio
        </Link>

        <div className="flex flex-col gap-12">
          {/* --- SMART ADAPTIVE VIDEO CANVAS --- */}
          <div className="flex justify-center w-full">
            <div className="relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black w-full max-w-6xl mx-auto">
              {/* This inner div ensures the container adjusts height based on video content */}
              <div className="relative w-full h-full flex items-center justify-center bg-zinc-950">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto max-h-[85vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                  <source src={data.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Floating Badge on Video */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 z-20">
                  <PlayCircle size={14} className="text-[#FFD700]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Studio Preview
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- CONTENT GRID --- */}
          <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto w-full">
            <div className="lg:col-span-2">
              <span className="text-[#FFD700] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Assignment #{data.number}
              </span>
              <h1 className="oswald text-5xl md:text-8xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">
                {data.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i % 2 !== 0 ? "text-red-600" : "text-white"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium border-l-2 border-red-900/30 pl-8">
                {data.description}
              </p>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <div className="p-8 gloss-card rounded-3xl border-white/5 bg-white/[0.02]">
                <h5 className="oswald text-sm font-bold uppercase mb-6 tracking-widest text-gray-500">
                  Project Intel
                </h5>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Cpu size={18} className="text-[#FFD700]" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Tech Stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[9px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300 font-bold uppercase tracking-tighter"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Target size={18} className="text-[#FFD700]" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        The Challenge
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      {data.challenge}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <Award size={18} className="text-red-600" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
                        Learning Outcome
                      </span>
                    </div>
                    <p className="text-sm text-white italic font-medium leading-relaxed">
                      "{data.outcome}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;
