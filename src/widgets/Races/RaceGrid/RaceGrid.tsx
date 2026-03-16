import React from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const RaceGrid: React.FC = () => {
  const races = Array(9).fill({
    id: 1,
    title: "Moroccan leg of the UAE President Cup Series",
    country: "Morocco",
    flag: "🇲🇦",
    date: "30 apr, 2025",
    daysRemaining: 7,
    slug: "moroccan-leg"
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Filters */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-50 p-2 rounded-full border border-gray-100 shadow-sm gap-2">
            <button className="flex items-center gap-3 px-8 py-3 bg-white rounded-full text-xs font-bold tracking-widest text-gray-400 hover:text-gray-900 shadow-sm transition-all border border-gray-100">
               <Calendar size={14} /> SEASON <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-3 px-8 py-3 bg-white rounded-full text-xs font-bold tracking-widest text-gray-400 hover:text-gray-900 shadow-sm transition-all border border-gray-100">
               <MapPin size={14} /> EVENT <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {races.map((race, idx) => (
            <Link 
              key={idx} 
              to={`/races/${race.slug}`}
              className="group relative bg-[#0A1045] rounded-[40px] p-8 h-[240px] flex flex-col justify-between overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-blue-950/20"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-600/5 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-600/10 transition-colors"></div>

              <div>
                <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1 mb-6">
                   <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                     {race.daysRemaining} Days remaining
                   </span>
                </div>
                <h4 className="text-2xl font-bold text-white leading-tight pr-4">
                  {race.title}
                </h4>
              </div>

              <div className="flex items-center gap-6 mt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Event Country</span>
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    {race.country} <span className="text-base">{race.flag}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 ml-4 border-l border-white/10 pl-6">
                  <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Event Date</span>
                  <div className="text-white font-bold text-sm italic uppercase tracking-tighter">
                    {race.date.split(',')[0]} <span className="text-white/40 italic">, {race.date.split(',')[1]}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceGrid;
