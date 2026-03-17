import React, { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const UpcomingRace: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 33,
    hours: 18,
    minutes: 30,
    seconds: 55
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Event Card */}
          <div className="relative rounded-[24px] overflow-hidden h-[320px] text-white bg-[#141473]">
            {/* Horse silhouette decoration */}
            <div className="absolute right-8 bottom-0 opacity-20">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="white">
                <path d="M160,180 C160,180 140,160 130,140 C120,120 125,100 120,80 C115,60 100,50 90,40 C80,30 70,20 60,25 C50,30 55,45 50,55 C45,65 30,70 25,80 C20,90 30,100 35,110 C40,120 35,135 40,145 C45,155 60,155 70,160 C80,165 85,180 85,180 L160,180 Z"/>
              </svg>
            </div>

            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[26px] font-bold mb-2">Upcoming Event</h3>
                <p className="text-white/60 text-[13px]">Don't miss what's coming up in the President's Cup lineup</p>
              </div>

              <div className="flex gap-12">
                <div>
                  <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-widest mb-2 font-semibold">
                    <MapPin size={11} className="text-white/50" /> Event Country
                  </div>
                  <div className="text-[28px] font-bold flex items-center gap-2">
                    Morocco <span className="text-2xl">🇲🇦</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-widest mb-2 font-semibold">
                    <Calendar size={11} className="text-white/50" /> Event Date
                  </div>
                  <div className="text-[28px] font-bold italic tracking-tight">
                    1 may, <span className="opacity-50">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Countdown Card */}
          <div className="rounded-[24px] bg-[#141473] p-8 flex flex-col justify-between h-[320px] text-white border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-[26px] font-bold mb-2">Event Countdown</h3>
              <p className="text-white/50 text-[13px]">Mark your calendar: days, hours, and minutes to the grand start</p>
            </div>

            <div className="relative z-10 grid grid-cols-4 gap-3">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-[#1a1a8c] rounded-[16px] w-full aspect-square flex items-center justify-center mb-2 border border-white/10">
                    <span className="text-4xl font-bold tracking-tighter">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 w-full h-0.5 bg-white/10 mt-2 flex items-center">
              <div className="w-[65%] h-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 -ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRace;
