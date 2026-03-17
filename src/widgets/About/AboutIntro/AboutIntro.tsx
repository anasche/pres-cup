import React from 'react';
import About2 from "@/assets/images/about/about-2.png";
import About3 from "@/assets/images/about/about-3.png";

const AboutIntro: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Images Section */}
          <div className="lg:w-1/2 flex gap-4">
            <div className="w-1/2 rounded-[40px] overflow-hidden shadow-xl aspect-[3/4]">
              <img 
                src={About2} 
                alt="Sheikh Portrait placeholder" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-1/2 rounded-[40px] overflow-hidden shadow-xl aspect-[3/4] mt-12">
              <img 
                src={About3}
                alt="Sheikh with White Horse" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 space-y-8 text-gray-700 leading-relaxed font-light text-lg">
            <p className="font-medium text-gray-900 leading-relaxed">
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
