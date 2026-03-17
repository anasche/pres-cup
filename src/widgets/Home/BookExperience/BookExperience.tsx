import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import EventBackground from "@/assets/images/experience/experience-1.jpg";
import Title from "@/components/Title";

const BookExperience: React.FC = () => {
  return (
    <section className="relative min-h-[420px] flex items-center overflow-hidden group">
      <div className="absolute inset-0">
        <img
          src={EventBackground}
          alt="Horse Racing Experience"
          className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px] relative z-10 py-20">
        <div className="max-w-lg">
          <Title dark={false} className="mb-5 text-[40px] md:text-[52px] xl:text-[60px]">
            Book Your<br />Experience
          </Title>
          <p className="text-white/70 text-[14px] mb-8 leading-relaxed max-w-sm">
            Reserve your spot for the most prestigious horse racing events in
            the region. Experience luxury seating and exceptional hospitality.
          </p>
          <Button className="shadow-2xl shadow-blue-600/30">
            BOOK EXPERIENCE
            <div className="bg-white/20 p-1 rounded-full">
              <ArrowRight size={14} />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookExperience;
