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
    <section className="bg-white overflow-hidden relative z-20">
      <div className="w-full max-w-[1688px] mx-auto px-[20px] py-20">

        {/* Featured Image with everything overlaid */}
        <div className="w-full relative rounded-[50px] overflow-hidden shadow-2xl" style={{ aspectRatio: "1687/974" }}>
          <img
            src={FeaturedEvent}
            alt="Calendar Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, #3C3CB6 15.39%, #141473 44.85%, rgba(19, 19, 123, 0) 84.66%)" }} />

          {/* Title at top */}
          <div className="absolute top-16 inset-x-0 flex flex-col items-center gap-3 px-6">
            <Title dark={false} className="text-center">
              Events Calendar
            </Title>
            <p className="font-medium text-[15px] leading-none tracking-tightest text-white/60 text-center">
              Never miss a moment—view all upcoming events here
            </p>
          </div>

          {/* Nav + Slider at bottom */}
          <div className="absolute bottom-6 inset-x-0 px-8">
            {/* Filters just above slider */}
            <div className="flex justify-center mb-2">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-4 gap-6">
                <button className="flex items-center gap-3 text-[#666] text-base font-medium transition-all hover:text-[#333]">
                  <Calendar size={20} className="text-[#666]" />
                  2025 <ChevronDown size={16} className="text-[#666]" />
                </button>
                <div className="w-px h-6 bg-gray-300"></div>
                <button className="flex items-center gap-3 text-[#666] text-base font-medium transition-all hover:text-[#333]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#666]">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  April <ChevronDown size={16} className="text-[#666]" />
                </button>
              </div>
            </div>
            <div className="flex justify-end mb-3">
              <div className="flex gap-3">
                <button className="events-prev h-9 w-9 bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors text-white">
                  <ArrowRight className="rotate-180" size={16} />
                </button>
                <button className="events-next h-9 w-9 bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors text-white">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: ".events-prev", nextEl: ".events-next" }}
              spaceBetween={16}
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
                    className="bg-[#05061F]/80 backdrop-blur-md border border-white/10 rounded-[30px] p-5 hover:border-white/30 transition-all flex flex-col justify-between mb-[50px]"
                    style={{ width: "509px", height: "208px", maxWidth: "100%" }}
                  >
                    <div className="flex justify-center mb-3">
                      <span className="bg-[#121278] px-3 py-1 rounded-full text-[9px] font-bold text-white/60 tracking-wider">
                        {idx === 0 ? "7 Days remaining" : idx === 1 ? "31 Days remaining" : "50 Days remaining"}
                      </span>
                    </div>
                    <h4 className="font-syne font-normal text-[35px] leading-[35px] tracking-[-0.03em] text-center text-white mb-4 px-1 line-clamp-2">
                      {event.title}
                    </h4>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-1">
                        <span className="font-sans font-normal text-[15px] leading-[100%] tracking-[-0.03em] text-white/40">Event Country</span>
                        <div className="flex items-center gap-1 font-syne font-bold text-[20px] leading-[100%] tracking-[-0.03em] text-white">
                          <MapPin size={10} className="text-white/40" /> Morocco 🇲🇦
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-sans font-normal text-[15px] leading-[100%] tracking-[-0.03em] text-white/40">Event Date</span>
                        <div className="flex items-center gap-1 font-syne font-bold text-[20px] leading-[100%] tracking-[-0.03em] text-white">
                          <Calendar size={10} className="text-white/40" />{" "}
                          {idx === 0 ? "30 apr, 2025" : idx === 1 ? "30 may, 2025" : "3 jun, 2025"}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
