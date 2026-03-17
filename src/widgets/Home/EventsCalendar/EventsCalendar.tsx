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
    <section
      className="py-32 text-white overflow-hidden rounded-t-[80px] -mt-20 relative z-20"
      style={{
        background:
          "linear-gradient(0deg, #3C3CB6 15.39%, #141473 44.85%, rgba(19, 19, 123, 0) 84.66%)",
      }}
    >
      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
        <div className="text-center mb-12">
          <Title dark={false} className="section-heading mb-4">
            Events Calendar
          </Title>
          <p className="font-medium text-[17px] leading-none tracking-tightest text-white/60">
            Never miss a moment—view all upcoming events here
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center bg-white rounded-full px-2 py-2 border border-white/10 gap-2">
            <button className="flex items-center gap-3 px-6 py-2 border border-gray-200 rounded-full text-[#333] text-sm font-medium transition-all hover:bg-gray-50">
              <Calendar size={16} className="text-gray-400" /> 2025{" "}
              <ChevronDown size={14} className="text-gray-400" />
            </button>
            <button className="flex items-center gap-3 px-6 py-2 border border-gray-200 rounded-full text-[#333] text-sm font-medium transition-all hover:bg-gray-50">
              <span className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              </span>{" "}
              April <ChevronDown size={14} className="text-gray-400" />
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#141473]/80 via-transparent to-transparent"></div>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-4 mb-8 justify-end">
          <button className="events-prev h-10 w-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/40 transition-colors border border-white/10">
            <ArrowRight className="rotate-180" size={18} />
          </button>
          <button className="events-next h-10 w-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/40 transition-colors border border-white/10">
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
              <div className="bg-[#05061F]/60 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 hover:border-white/20 transition-all group h-full relative">
                <div className="flex justify-center mb-6">
                  <span className="bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold text-white/60 tracking-wider">
                    {idx === 0
                      ? "7 Days remaining"
                      : idx === 1
                        ? "31 Days remaining"
                        : "50 Days remaining"}
                  </span>
                </div>

                <h4 className="text-[22px] font-medium leading-[1.3] text-center mb-10 px-4">
                  {event.title}
                </h4>

                <div className="flex justify-between items-center px-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/40 font-medium">
                      Event Country
                    </span>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <MapPin size={12} className="text-white/40" /> Morocco 🇲🇦
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/40 font-medium">
                      Event Date
                    </span>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Calendar size={12} className="text-white/40" />{" "}
                      {idx === 0
                        ? "30 apr, 2025"
                        : idx === 1
                          ? "30 may, 2025"
                          : "3 jun, 2025"}
                    </div>
                  </div>
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
