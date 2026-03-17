import React from "react";
import { ArrowRight } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import Title from "@/components/Title";
import Event1 from "@/assets/images/news/news-1.png";
import Event2 from "@/assets/images/news/news-1.png";
import Event3 from "@/assets/images/news/news-1.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const News: React.FC = () => {
  const newsItems = [
    {
      image: Event1,
      tag: "Arabian Horse News",
      title:
        "Congratulations to the champions of the Moroccan leg of the UAE President Cup Series",
      date: "March 15, 2024",
    },
    {
      image: Event1,
      tag: "Arabian Horse News",
      title:
        "Congratulations to the champions of the Moroccan leg of the UAE President Cup Series",
      date: "March 15, 2024",
    },
    {
      image: Event1,
      tag: "Arabian Horse News",
      title:
        "Congratulations to the champions of the Moroccan leg of the UAE President Cup Series",
      date: "March 15, 2024",
    },
    {
      image: Event2,
      tag: "Competition News",
      title:
        "Tomorrow, the eleventh leg of the UAE President Cup for Purebred Arabian Horses flags off",
      date: "March 14, 2024",
    },
    {
      image: Event3,
      tag: "Arabian Horse News",
      title:
        "Tomorrow, the Netherlands hosts the ninth leg of the President Cup for Arabian Horses",
      date: "March 13, 2024",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
        {/* Header */}
        <div className="text-center mb-6">
          <div>
            <Title dark={true} className="mb-2">
              News
            </Title>
            <p className="font-medium text-[15px] leading-none tracking-tightest text-black/60">
              Stay updated with the latest from the world of horse racing
            </p>
          </div>
        </div>

        <div className="flex gap-2 mb-6 justify-end text-black">
          <button className="custom-prev h-10 w-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ArrowRight className="rotate-180" size={18} />
          </button>
          <button className="custom-next h-10 w-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={24}
          className="news-swiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {newsItems.map((item, index) => (
            <SwiperSlide key={index}>
              <NewsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
