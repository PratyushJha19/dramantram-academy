import React, { useState, useEffect } from 'react';
import { Rocket, CheckCircle2, Calendar, MapPin, Award, UserPlus, Users, Sparkles, Target } from 'lucide-react';

const BootcampPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 32,
    hours: 17,
    minutes: 4,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)] z-0"></div>
      <div className="absolute inset-0 bg-red-radial opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Invitation Text */}
        <p className="text-center text-gray-400 italic text-lg md:text-xl mb-6 animate-fade-in-up">
          You've been invited to experience Dramantram.
        </p>

        {/* Hero Headlines */}
        <div className="text-center mb-12">
          <h1 className="oswald text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 animate-fade-in-up animation-delay-200">
            Don't Just Learn It. <br />
            <span className="text-gradient-red">Experience It.</span>
          </h1>
          <h2 className="text-[#FFD700] oswald text-xl md:text-3xl font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in-up animation-delay-400">
            A 1–2 Day Immersive Bootcamp by Dramantram Academy
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed mb-12 animate-fade-in-up animation-delay-600">
            A hands-on bootcamp designed to give you a real taste of how learning happens at Dramantram — 
            through practical tasks, real-world scenarios, and mentor-led sessions.
          </p>

          <button className="px-12 py-5 bg-gradient-to-r from-[#e67e22] to-[#f39c12] text-white font-black uppercase tracking-widest text-sm rounded-xl hover:shadow-[0_0_30px_rgba(230,126,34,0.5)] transition-all transform hover:scale-105 mb-24 animate-fade-in-up animation-delay-600">
            Register for the Bootcamp – Limited Seats
          </button>
        </div>

        {/* Countdown & Rocket Section */}
        <div className="relative flex flex-col items-center mb-40 animate-fade-in-up animation-delay-600">
          <div className="absolute -left-10 md:left-20 top-0 w-48 md:w-80 opacity-40 pointer-events-none z-0">
            <img 
              src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600" 
              className="w-full h-auto grayscale mix-blend-screen rotate-[-15deg] animate-pulse"
              alt="Rocket Launch"
            />
          </div>

          <div className="gloss-card p-1 md:p-1.5 rounded-[2.5rem] border-[#FFD700]/30 bg-black/40 backdrop-blur-3xl inline-block relative z-10">
            <div className="px-10 py-10 md:px-20 md:py-12 text-center">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Next Bootcamp Starts In</div>
              <div className="flex gap-4 md:gap-10 items-center justify-center">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="oswald text-4xl md:text-7xl font-black text-white tabular-nums">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-bold text-[#FFD700] uppercase tracking-widest mt-2">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Info Grid - Row 1: Who it's for */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 reveal">
          <div className="order-2 md:order-1">
            <h3 className="oswald text-2xl font-black uppercase tracking-widest text-[#FFD700] mb-8 flex items-center gap-3">
              <Users size={24} className="text-[#FFD700]" /> WHO IT’S FOR
            </h3>
            <p className="text-gray-300 text-xl font-medium mb-6 leading-relaxed">
              Curious learners who want to experience practical learning before committing long-term.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Perfect for students, freshers, and anyone exploring creative career paths. No prior experience required — just curiosity and willingness to participate.
            </p>
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-black" alt="Student" />
              ))}
              <div className="w-10 h-10 rounded-full bg-[#FFD700] text-black text-[10px] font-bold flex items-center justify-center border-2 border-black">+50</div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Joined by aspirers nationwide</p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#FFD700]/10 rounded-3xl blur-2xl group-hover:bg-[#FFD700]/20 transition-all"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                className="relative rounded-3xl w-full grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                alt="Students collaborating"
              />
            </div>
          </div>
        </div>

        {/* Visual Info Grid - Row 2: What you'll do */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 reveal">
          <div className="order-1">
             <div className="relative group">
                <div className="absolute -inset-4 bg-[#FF0000]/10 rounded-3xl blur-2xl group-hover:bg-[#FF0000]/20 transition-all"></div>
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
                  className="relative rounded-3xl w-full grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  alt="Creative work session"
                />
              </div>
          </div>
          <div className="order-2">
            <h3 className="oswald text-2xl font-black uppercase tracking-widest text-[#FFD700] mb-8 flex items-center gap-3">
              <Target size={24} className="text-[#FFD700]" /> WHAT YOU’LL DO
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Hands-on activities", desc: "No boring lectures. You touch the gear from hour one." },
                { title: "Real-world challenges", desc: "Solve actual briefs from our studio archives." },
                { title: "Small group collaboration", desc: "Network and build with peers in tight-knit teams." },
                { title: "Direct Mentor Access", desc: "Get feedback from the pros who've seen it all." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#FF0000]"></div>
                  <div>
                    <span className="block text-white font-bold uppercase text-sm mb-1">{item.title}</span>
                    <span className="block text-gray-400 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual Info Grid - Row 3: Why This Bootcamp */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center mb-40 reveal">
          <div className="order-2 md:order-1">
            <h3 className="oswald text-2xl font-black uppercase tracking-widest text-[#FFD700] mb-8 flex items-center gap-3">
              <Sparkles size={24} className="text-[#FFD700]" /> WHY THIS BOOTCAMP
            </h3>
            <h4 className="oswald text-3xl font-black text-white mb-6 uppercase">Because learning makes sense <br /> when you <span className="text-[#FF0000]">do it.</span></h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-[#FFD700]/50 transition-all">
                <CheckCircle2 className="text-[#FFD700] mb-3" size={24} />
                <span className="text-xs font-bold uppercase text-gray-300">Learn by doing</span>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-[#FFD700]/50 transition-all">
                <CheckCircle2 className="text-[#FFD700] mb-3" size={24} />
                <span className="text-xs font-bold uppercase text-gray-300">Small Batches</span>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-[#FFD700]/50 transition-all">
                <CheckCircle2 className="text-[#FFD700] mb-3" size={24} />
                <span className="text-xs font-bold uppercase text-gray-300">Real Scenarios</span>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-[#FFD700]/50 transition-all">
                <CheckCircle2 className="text-[#FFD700] mb-3" size={24} />
                <span className="text-xs font-bold uppercase text-gray-300">Mentor Guidance</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
                <div className="absolute -inset-4 bg-purple-600/10 rounded-3xl blur-2xl group-hover:bg-purple-600/20 transition-all"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                  className="relative rounded-3xl w-full grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  alt="Team work"
                />
              </div>
          </div>
        </div>

        {/* Detailed Summary Footer */}
        <div className="bg-[#FF0000]/5 border-y border-white/5 py-16 px-6 md:px-12 rounded-[3rem] reveal">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center">
              <Calendar className="text-[#FFD700] mb-4" size={32} />
              <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Duration</div>
              <div className="oswald text-2xl font-black">1–2 DAYS</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="text-[#FFD700] mb-4" size={32} />
              <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Mode</div>
              <div className="oswald text-2xl font-black">IN-PERSON</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="text-[#FFD700] mb-4" size={32} />
              <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Certification</div>
              <div className="oswald text-2xl font-black">INCLUDED</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <UserPlus className="text-[#FFD700] mb-4" size={32} />
              <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Status</div>
              <div className="oswald text-2xl font-black text-[#FF0000]">LIMITED SEATS</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 reveal">
           <button className="px-12 py-5 bg-[#FF0000] text-white font-black uppercase tracking-widest text-sm rounded-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all transform hover:scale-105">
            Grab Your Slot Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BootcampPage;