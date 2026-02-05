import React from 'react';
import { Clock, MapPin, Laptop, Calendar } from 'lucide-react';

const ProgramBar: React.FC = () => {
  const stats = [
    { label: 'Duration', value: '6 - 12 Months', sub: 'Flexible Scheduling', icon: Clock },
    { label: 'Location', value: 'Online / Hybrid', sub: 'Global Access', icon: MapPin },
    { label: 'Format', value: 'Live + Practical', sub: 'Hands-on Projects', icon: Laptop },
    { label: 'Start Date', value: 'April 15, 2026', sub: 'Limited Seats', icon: Calendar, highlight: true },
  ];

  return (
    <div className="relative z-20 px-4 md:px-6 reveal">
      {/* Added subtle red gradient background */}
      <div className="absolute inset-0 bg-red-radial opacity-20 -z-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto gloss-card rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5 overflow-hidden">
        {stats.map((item, idx) => (
          <div key={idx} className="p-6 md:p-8 hover:bg-white/[0.03] transition-colors group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#FFD700]/10 transition-colors">
                <item.icon className={item.highlight ? "text-[#FFD700]" : "text-[#FF0000]"} size={22} />
              </div>
              <div>
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="text-lg font-bold oswald group-hover:text-[#FFD700] transition-colors leading-tight">{item.value}</div>
                <div className="text-[10px] text-gray-500 font-medium">{item.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramBar;