import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

interface NewsCardProps {
  image: string;
  tag?: string;
  title: string;
  date: string;
  description?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  tag,
  title,
  date,
  description,
}) => {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <div className="group bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {date && (
          <p className="text-[11px] font-medium text-[#1B3A6B] mb-3 tracking-wide">
            {date}
          </p>
        )}
        <h3 className="text-[16px] font-bold text-[#0A0B14] mb-3 group-hover:text-blue-600 transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-gray-400 text-[13px] leading-relaxed mb-6 line-clamp-4 flex-grow">
          {description ||
            "The winners were honored by His Excellency Omar Abdulrahman Al Attiyah, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses and Omar Al Saqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing."}
        </p>

        <div className="mt-auto">
          <Button
            to={`/news/${slug}`}
            variant="primary"
            size="md"
          >
            Read more
            <div className="bg-white/20 p-1 rounded-full">
              <ArrowRight size={12} fill="white" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
