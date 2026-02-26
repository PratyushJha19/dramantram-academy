import React from "react";
import { MessageSquare } from "lucide-react";

const Community: React.FC = () => {
  const members = [
    {
      name: "",
      role: "",
      color: "bg-[#FFD700]",
      height: "h-[80%]",
      img: "/rupam1.jpg",
    },
    {
      name: "",
      role: "",
      color: "bg-[#00FF85]",
      height: "h-[90%]",
      img: "shadab_comm.jpg",
    },
    {
      name: "",
      role: "",
      color: "bg-[#ff5e5e]",
      height: "h-[95%]",
      img: "kundan_comm.jpg",
    },
    {
      name: "",
      role: "",
      color: "bg-[#9333ea]",
      height: "h-[85%]",
      img: "rupam_comm.jpg",
    },
  ];

  return (
    <section className="py-24 bg-black relative reveal">
      <div className="absolute inset-0 bg-glow-tr opacity-25"></div>
      <div className="absolute inset-0 bg-red-radial opacity-15"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="oswald text-5xl font-black uppercase mb-8 leading-tight">
          A Community For The <span className="text-[#9333ea]">Next-Gen</span>{" "}
          <br /> Professionals of India
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 font-medium">
          We've multiple social channels where you can join and network with
          other like-minded professionals and grow together as a community.
        </p>

        <div className="relative h-[550px] mb-20 overflow-hidden flex justify-center items-end gap-2 md:gap-4 px-4">
          {/* Members Bars */}
          {members.map((member, idx) => (
            <div
              key={idx}
              className={`group relative folder-card w-1/4 ${member.height} overflow-hidden transition-all duration-500 hover:scale-[1.02]`}
            >
              {/* Image Background Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
                style={{ backgroundImage: `url(${member.img})` }}
              />

              {/* Color Overlay Layer (Tint) */}
              <div
                className={`absolute inset-0 ${member.color} opacity-40 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Content Layer */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end text-left bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <h4 className="oswald text-xl font-bold uppercase text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {member.name}
                </h4>
                <div className="text-[10px] font-black uppercase tracking-tighter text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {member.role}
                </div>
              </div>
            </div>
          ))}

          {/* Center Floating Card */}
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-xs md:max-w-md pointer-events-none">
            <div className="gloss-card p-10 rounded-3xl border-white/20 text-center shadow-2xl pointer-events-auto">
              <h3 className="oswald text-2xl font-bold uppercase mb-4">
                Join the Growing <br /> Community
              </h3>
              <a
                href="https://chat.whatsapp.com/GT8IRbAU0H3GXw7syc9w6n"
                className="px-8 py-3 bg-[#00FF85] text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                <MessageSquare size={18} /> Become a Part Today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
