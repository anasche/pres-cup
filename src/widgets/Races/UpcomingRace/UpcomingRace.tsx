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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2">
          {/* Upcoming Event Card */}
          <div className="relative rounded-[40px] overflow-hidden aspect-[16/9] lg:aspect-auto h-[400px] text-white group cursor-pointer shadow-2xl shadow-blue-900/10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <img 
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800" 
                alt="Race background" 
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-[28px] font-bold mb-2">Upcoming Event</h3>
                <p className="text-white/70 text-sm">Don't miss what's coming up in the President's Cup lineup</p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex gap-12">
                   <div>
                    <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest mb-2 font-bold">
                       <MapPin size={12} className="text-blue-400" /> EVENT COUNTRY
                    </div>
                    <div className="text-3xl font-bold flex items-center gap-3">
                      Morocco <span className="text-2xl">🇲🇦</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest mb-2 font-bold">
                       <Calendar size={12} className="text-blue-400" /> EVENT DATE
                    </div>
                    <div className="text-3xl font-bold uppercase italic tracking-tighter">
                      1 may, <span className="opacity-60">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Countdown Card */}
          <div className="rounded-[40px] bg-[#0A1045] p-10 flex flex-col justify-between h-[400px] text-white shadow-2xl shadow-blue-900/10 border border-white/5 relative overflow-hidden">
             {/* Decorative pattern */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-800/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

             <div className="relative z-10">
              <h3 className="text-[28px] font-bold mb-2">Event Countdown</h3>
              <p className="text-white/50 text-sm">Mark your calendar: days, hours, and minutes to the grand start</p>
            </div>

            <div className="relative z-10 grid grid-cols-4 gap-4">
               {[
                 { label: 'Days', value: timeLeft.days },
                 { label: 'Hours', value: timeLeft.hours },
                 { label: 'Minutes', value: timeLeft.minutes },
                 { label: 'Seconds', value: timeLeft.seconds },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl w-full aspect-square flex items-center justify-center mb-3 border border-white/10 group-hover:border-blue-500 transition-colors">
                       <span className="text-5xl font-bold tracking-tighter">
                         {item.value.toString().padStart(2, '0')}
                       </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</span>
                 </div>
               ))}
            </div>
            
            <div className="relative z-10 w-full h-0.5 bg-white/5 mt-4 flex items-center">
               <div className="w-[70%] h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
               <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] -ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRace;
