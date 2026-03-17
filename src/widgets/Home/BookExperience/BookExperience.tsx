import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import EventBackground from "@/assets/images/experience/experience-1.jpg";
import Title from "@/components/Title"; // Assuming Title component is imported

const BookExperience: React.FC = () => {
  return (
    <section className="relative py-60 min-h-[800px] flex items-center overflow-hidden group">
      <div className="absolute inset-0">
        <img
          src={EventBackground}
          alt="Horse Racing Experience"
          className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px] relative z-10">
        <div className="max-w-xl">
          <div className="bg-blue-600 text-white text-[9px] font-black px-4 py-1.5  mb-6 inline-block tracking-widest uppercase">
UAE President Cup          </div>
          <Title dark={false} className="mb-6">
            Book Your Experience
          </Title>
          <p className="text-white/70 text-sm mb-10 leading-relaxed max-w-md">
            Reserve your spot for the most prestigious horse racing events in
            the region. Experience luxury seating and exceptional hospitality.
          </p>
          <Button className="shadow-2xl shadow-blue-600/30">
            BOOK EXPERIENCE
            <div className="bg-white p-1 rounded-full">
              <ArrowRight size={14} fill="" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookExperience;
