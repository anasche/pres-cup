import React from 'react';
import { Calendar, ChevronDown, ArrowRight, MapPin } from 'lucide-react';

const EventsCalendar: React.FC = () => {
  const events = [
    { title: 'Moroccan leg of the UAE President Cup Series', date: 'January 25, 2024', location: 'Casablanca, Morocco' },
    { title: 'Moroccan leg of the UAE President Cup Series', date: 'January 25, 2024', location: 'Casablanca, Morocco' },
    { title: 'Moroccan leg of the UAE President Cup Series', date: 'January 25, 2024', location: 'Casablanca, Morocco' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A1045] to-[#121A66] text-white overflow-hidden rounded-t-[80px] -mt-20 relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4">Events Calendar</h2>
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
            Watch the latest leg in Morocco and more about racing events
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 gap-4">
             <button className="flex items-center gap-3 px-6 py-2 bg-white rounded-full text-[#0A0B14] text-xs font-black shadow-lg">
                MONTH <ChevronDown size={14} />
             </button>
             <button className="flex items-center gap-3 px-6 py-2 text-white/50 hover:text-white text-xs font-black transition-colors">
                WEEK <ChevronDown size={14} />
             </button>
          </div>
        </div>

        {/* Featured Image placeholder */}
        <div className="max-w-4xl mx-auto relative aspect-video rounded-[60px] overflow-hidden mb-20 shadow-2xl border-2 border-white/5">
           <img 
            src="https://images.unsplash.com/photo-1598974357801-cbca100e0444?auto=format&fit=crop&q=80&w=1200" 
            alt="Calendar Featured" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A1045]/80 via-transparent to-transparent"></div>
           <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
              <div>
                 <div className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full mb-3 inline-block tracking-widest">NEXT RACE</div>
                 <h3 className="text-3xl font-bold max-w-md leading-tight">Moroccan leg of the UAE President Cup Series</h3>
              </div>
           </div>
        </div>

        {/* Event Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {events.map((event, idx) => (
             <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 hover:bg-white/10 transition-all group">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                      <MapPin size={12} /> {event.location}
                   </div>
                </div>
                <h4 className="text-sm font-bold leading-relaxed mb-6 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h4>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                   <div className="text-[10px] font-bold text-white/40 flex items-center gap-2">
                      <Calendar size={12} /> {event.date}
                   </div>
                   <button className="bg-blue-600/20 text-blue-400 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowRight size={14} />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
