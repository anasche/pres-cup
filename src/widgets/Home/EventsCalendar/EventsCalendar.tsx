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
          <div className="absolute top-10 inset-x-0 flex flex-col items-center gap-3 px-6">
            <Title dark={false} className="text-center">
              Events Calendar
            </Title>
            <p className="font-medium text-[17px] leading-none tracking-tightest text-white/60 text-center">
              Never miss a moment—view all upcoming events here
            </p>
          </div>

          {/* Filters — positioned at ~55% from top, just above gradient */}
          <div className="absolute top-[52%] inset-x-0 flex justify-center px-6">
            <div className="inline-flex items-center bg-white rounded-full px-2 py-2 gap-2">
              <button className="flex items-center gap-3 px-6 py-2 border border-gray-200 rounded-full text-[#333] text-sm font-medium transition-all hover:bg-gray-50">
                Season <ChevronDown size={14} className="text-gray-400" />
              </button>
              <button className="flex items-center gap-3 px-6 py-2 border border-gray-200 rounded-full text-[#333] text-sm font-medium transition-all hover:bg-gray-50">
                Event <ChevronDown size={14} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Nav + Slider at bottom */}
          <div className="absolute bottom-6 inset-x-0 px-8">
            <div className="flex justify-end mb-3">
              <div className="flex gap-3">
                <button className="events-prev h-9 w-9 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                  <ArrowRight className="rotate-180" size={16} />
                </button>
                <button className="events-next h-9 w-9 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white">
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
                  <div className="bg-[#05061F]/80 backdrop-blur-md border border-white/10 rounded-[24px] p-6 hover:border-white/30 transition-all">
                    <div className="flex justify-center mb-4">
                      <span className="bg-white/10 px-4 py-1 rounded-full text-[10px] font-bold text-white/60 tracking-wider">
                        {idx === 0 ? "7 Days remaining" : idx === 1 ? "31 Days remaining" : "50 Days remaining"}
                      </span>
                    </div>
                    <h4 className="text-[16px] font-medium leading-[1.3] text-center text-white mb-6 px-2">
                      {event.title}
                    </h4>
                    <div className="flex justify-between items-center px-1">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-white/40 font-medium">Event Country</span>
                        <div className="flex items-center gap-2 text-xs font-semibold text-white">
                          <MapPin size={11} className="text-white/40" /> Morocco 🇲🇦
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-white/40 font-medium">Event Date</span>
                        <div className="flex items-center gap-2 text-xs font-semibold text-white">
                          <Calendar size={11} className="text-white/40" />{" "}
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
