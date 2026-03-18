import React from "react";
import About1 from "@/assets/images/about/about-1.jpg";
import Title from "@/components/Title";

const AboutHero: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4">
        {/* First Section - Text Left, Image Right (Overlapped) */}
        <div className="relative mb-32 h-[704px]">
          {/* Text Container */}
          <div 
            className="absolute z-10 bg-gray-100 rounded-[50px] flex flex-col justify-center p-12"
            style={{ 
              left: "22px", 
              top: "0px",
              width: "994px", 
              height: "704px",
              maxWidth: "calc(100vw - 400px)",
              paddingRight: "200px"
            }}
          >
            <Title dark={true} className="mb-8">
              UAE <br /> President Cup
            </Title>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
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
          
          {/* Image Container */}
          <div 
            className="absolute z-20 rounded-[50px] overflow-hidden shadow-lg"
            style={{ 
              right: "22px", 
              top: "0px",
              width: "807px", 
              height: "704px",
              maxWidth: "calc(100vw - 400px)"
            }}
          >
            <img
              src={About1}
              alt="Horse racing at sunset"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Section - Image Left, Text Right (Overlapped) */}
        <div className="relative h-[704px]">
          {/* Image Container */}
          <div 
            className="absolute z-20 rounded-[50px] overflow-hidden shadow-lg"
            style={{ 
              left: "22px", 
              top: "0px",
              width: "807px", 
              height: "704px",
              maxWidth: "calc(100vw - 400px)"
            }}
          >
            <img
              src={About1}
              alt="Horse racing at sunset"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Container */}
          <div 
            className="absolute z-10 bg-gray-100 rounded-[50px] flex flex-col justify-center p-12"
            style={{ 
              right: "22px", 
              top: "0px",
              width: "994px", 
              height: "704px",
              maxWidth: "calc(100vw - 400px)",
              paddingLeft: "270px"
            }}
          >
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
Today, the prestigious cup has become one of the most important and historic classic races in the world, attracting the elite of horse owners.
</p><p>
In this challenge for titles, the best horses are supervised by the finest trainers and jockeys, and the races are held at some of the most historic tracks around the world. The series is supported and guided by His His Highness Sheikh Mansour Bin Zayed Al Nahyan, UAE Vice President, Deputy Prime Minister and President of the Presidential Court, reflecting his commitment to developing the Arabian horse racing industry and supporting Arabian horse owners and breeders worldwide. This support underscores the UAE's plans to maintain the stature of Arabian horses and enhance their global presence.
</p><p>
Over 31 years, the series has made a notable international impact, highlighting the UAE's rich equestrian legacy and its pivotal role in preserving the journey of the Arabian horse.              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;