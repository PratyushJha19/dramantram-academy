import React from "react";
import {
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#FF0000]/5 blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-20 h-20 bg-[#FF0000] rounded-sm transform flex items-center justify-center">
              {/* <span className="text-white font-black oswald -rotate-45">D</span> */}
              <img src="Dramantram Logo.png" alt="" />
            </div>
            <span className="oswald text-3xl font-black tracking-tighter uppercase">
              Dramantram
            </span>
          </div>

          <p className="text-gray-500 max-w-sm mb-10 leading-relaxed font-medium">
            Empowering the next generation of creative professionals with
            industry-relevant skills and hands-on mentorship.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 group">
              <div className="p-2 rounded-lg bg-white/5 text-[#FF0000] group-hover:bg-[#FF0000]/20 transition-colors">
                <MapPin size={18} />
              </div>
              <span className="text-gray-400 text-sm font-medium">
                123 Creative Avenue, Arts District, <br />
                Mumbai, Maharashtra 400053
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="oswald text-white uppercase tracking-widest font-bold mb-8 text-sm">
            Quick Links
          </h4>
          <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase tracking-wider">
            <li>
              <a
                href="#"
                className="hover:text-[#FF0000] transition-colors inline-flex items-center gap-2"
              >
                <span>&rsaquo;</span> About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF0000] transition-colors inline-flex items-center gap-2"
              >
                <span>&rsaquo;</span> All Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF0000] transition-colors inline-flex items-center gap-2"
              >
                <span>&rsaquo;</span> Mentors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF0000] transition-colors inline-flex items-center gap-2"
              >
                <span>&rsaquo;</span> Success Stories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF0000] transition-colors inline-flex items-center gap-2"
              >
                <span>&rsaquo;</span> Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5">
          <h4 className="oswald text-white uppercase tracking-widest font-bold mb-8 text-sm">
            Get in Touch
          </h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="gloss-card p-6 rounded-2xl group hover:bg-white/5 transition-colors cursor-pointer">
              <Phone className="text-[#FF0000] mb-3" size={20} />
              <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">
                Call Us
              </div>
              <div className="text-sm font-bold">+91 98765 43210</div>
            </div>
            <div className="gloss-card p-6 rounded-2xl group hover:bg-white/5 transition-colors cursor-pointer">
              <Mail className="text-[#FF0000] mb-3" size={20} />
              <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">
                Email Us
              </div>
              <div className="text-sm font-bold">hello@dramantram.com</div>
            </div>
          </div>

          <div className="flex gap-4">
            {[Instagram, Youtube, Twitter, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-12 h-12 rounded-full gloss-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
          &copy; 2026 Dramantram Academy. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
