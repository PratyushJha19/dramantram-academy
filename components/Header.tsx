import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <img className="w-10 md:w-12 h-auto logo-mask" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
          <img
            src="dramantram-logo.png"
            className="w-auto h-10 logo-mask"
            alt=""
            viewBox="0 0 100 50"
            fill="none"
          />
          <div className="hidden sm:block">
            <span className="oswald text-lg md:text-xl font-black tracking-tighter uppercase block leading-none">
              Dramantram
            </span>
            <span className="text-[9px] tracking-[0.4em] text-[#FFD700] uppercase font-bold">
              Academy
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase">
          <a
            href="#"
            className="text-white hover:text-[#FFD700] transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD700] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#FFD700] transition-colors relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD700] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#courses"
            className="text-white hover:text-[#FFD700] transition-colors relative group"
          >
            Courses
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD700] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#portfolio"
            className="text-white hover:text-[#FFD700] transition-colors relative group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFD700] transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-[#FFD700] hover:text-white transition-colors">
            Enquiry Form
          </button>
          <a
            href="#apply"
            className="px-5 py-2 md:px-6 md:py-2.5 bg-[#FF0000] text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#d00000] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-all"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
