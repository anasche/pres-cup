import React from 'react';
import About2 from "@/assets/images/about/about-2.png";

const AboutIntro: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Image Section */}
          <div className="lg:w-[45%] flex-shrink-0">
            <div className="rounded-[24px] overflow-hidden shadow-xl aspect-[3/4]">
              <img
                src={About2}
                alt="Sheikh Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-[55%] space-y-6 text-gray-600 leading-relaxed text-[14px] pt-4">
            <p className="font-medium text-gray-900 text-[15px] leading-relaxed">
              Today, the prestigious cup has become one of the most important and historic classic races in the world, attracting the elite of horse owners.
            </p>
            <p>
              In this challenge for titles, the best horses are supervised by the finest trainers and jockeys, and the races are held at some of the most historic tracks around the world. The series is supported and guided by His Highness Sheikh Mansour Bin Zayed Al Nahyan, UAE Vice President, Deputy Prime Minister and President of the Presidential Court, reflecting his commitment to developing the Arabian horse racing industry and supporting Arabian horse owners and breeders worldwide. This support underscores the UAE's plans to maintain the stature of Arabian horses and enhance their global presence.
            </p>
            <p>
              Over 31 years, the series has made a notable international impact, highlighting the UAE's rich equestrian legacy and its pivotal role in preserving the journey of the Arabian horse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
