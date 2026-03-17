import React from "react";
import About1 from "@/assets/images/about/about-1.jpg";
import Title from "@/components/Title";

const AboutHero: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 space-y-5 pt-4">
            <Title dark={true} className="text-[48px] md:text-[56px] xl:text-[64px] leading-tight">
              UAE <br /> President Cup
            </Title>
            <div className="space-y-4 text-gray-600 leading-relaxed text-[14px] max-w-md">
              <p>
                The series of races for the UAE President's Cup for Purebred
                Arabian Horses began in 1994, envisioned by the late founder,
                Sheikh Zayed bin Sultan Al Nahyan, may Allah rest his soul.
              </p>
              <p>
                The aim was to highlight the importance of purebred Arabian
                horses and to elevate their status while celebrating the
                heritage of the Emirates on a global scale.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-[24px] overflow-hidden shadow-xl">
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
