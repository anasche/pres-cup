import React from 'react';
import About1 from "@/assets/images/about/about-1.jpg";


const AboutHero: React.FC = () => {
  return (
    <section className="bg-[#f8f9fa] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-tight font-serif uppercase tracking-tight">
              UAE <br /> President Cup
            </h1>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-xl">
              <p>
                The series of races for the UAE President's Cup for Purebred Arabian Horses began in 1994, envisioned by the late founder, Sheikh Zayed bin Sultan Al Nahyan, may Allah rest his soul.
              </p>
              <p>
                The aim was to highlight the importance of purebred Arabian horses and to elevate their status while celebrating the heritage of the Emirates on a global scale.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-[40px] overflow-hidden shadow-2xl transform rotate-1">
              <img 
                src={About1} 
                alt="Horse racing at sunset" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
