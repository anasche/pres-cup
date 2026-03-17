import React from 'react';
import { Calendar, MapPin, ChevronDown, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const RaceGrid: React.FC = () => {
  const races = Array(9).fill({
    id: 1,
    title: "Moroccan leg of the UAEPresidentCup Series",
    country: "Morocco",
    flag: "🇲🇦",
    date: "30 apr, 2025",
    daysRemaining: 7,
    slug: "moroccan-leg"
  });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-200 shadow-sm gap-2">
            <button className="flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium text-gray-500 hover:bg-gray-50 transition-all border border-gray-200">
              <Calendar size={14} className="text-gray-400" /> Season <ChevronDown size={13} className="text-gray-400" />
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium text-gray-500 hover:bg-gray-50 transition-all border border-gray-200">
              <Clock size={14} className="text-gray-400" /> Event <ChevronDown size={13} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {races.map((race, idx) => (
            <Link
              key={idx}
              to={`/races/${race.slug}`}
              className="group relative bg-[#141473] rounded-[20px] p-6 h-[220px] flex flex-col justify-between overflow-hidden hover:bg-[#1a1a8c] transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="inline-flex items-center mb-4">
                  <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                    {race.daysRemaining} Days remaining
                  </span>
                </div>
                <h4 className="text-[20px] font-bold text-white leading-snug">
                  {race.title}
                </h4>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/40 text-[10px] uppercase tracking-wider font-semibold">
                    <MapPin size={10} /> Event Country
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-bold text-[14px]">
                    {race.country} <span>{race.flag}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/40 text-[10px] uppercase tracking-wider font-semibold">
                    <Calendar size={10} /> Event Date
                  </div>
                  <div className="text-white font-bold text-[14px]">
                    {race.date}
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
