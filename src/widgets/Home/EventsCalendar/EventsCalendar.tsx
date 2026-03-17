import { Calendar, ChevronDown, ArrowRight, MapPin } from "lucide-react";
import FeaturedEvent from "@/assets/images/event-calendar/event-calendar.png";
import Title from "@/components/Title";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const EventsCalendar: React.FC = () => {
  const events = [
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
    {
      title: "Moroccan leg of the UAE President Cup Series",
      date: "January 25, 2024",
      location: "Casablanca, Morocco",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0A1045] to-[#121A66] text-white overflow-hidden rounded-t-[80px] -mt-20 relative z-20">
      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
        <div className="text-center mb-12">
          <Title dark={false} className="section-heading mb-4">
            Events Calendar
          </Title>
          <p className="font-medium text-[17px] leading-none tracking-tightest text-white/40">
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
            src={FeaturedEvent}
            alt="Calendar Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1045]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
            <div>
              <div className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full mb-3 inline-block tracking-widest">
                NEXT RACE
              </div>
              <h3 className="text-3xl font-bold max-w-md leading-tight">
                Moroccan leg of the UAE President Cup Series
              </h3>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-2 mb-6 justify-end">
          <button className="events-prev h-10 w-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
             <ArrowRight className="rotate-180" size={18} />
          </button>
          <button className="events-next h-10 w-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
             <ArrowRight size={18} />
          </button>
        </div>

        {/* Event Cards Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".events-prev",
            nextEl: ".events-next",
          }}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="events-swiper"
        >
          {events.map((event, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 hover:bg-white/10 transition-all group h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                    <MapPin size={12} /> {event.location}
                  </div>
                </div>
                <h4 className="text-sm font-bold leading-relaxed mb-6 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h4>
                <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-auto">
                  <div className="text-[10px] font-bold text-white/40 flex items-center gap-2">
                    <Calendar size={12} /> {event.date}
                  </div>
                  <button className="bg-blue-600/20 text-blue-400 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsCalendar;
