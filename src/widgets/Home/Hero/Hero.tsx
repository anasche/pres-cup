import React from 'react';
import HeroBanner from '@/assets/images/hero-banner.png';
import Button from '@/components/Button';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const sponsors = [
    { name: 'Sponsor 1', logo: '🏇' },
    { name: 'Sponsor 2', logo: '🐎' },
    { name: 'Sponsor 3', logo: '🏆' },
    { name: 'Sponsor 4', logo: '🇦🇪' },
    { name: 'Sponsor 5', logo: '📜' },
    { name: 'Sponsor 6', logo: '🏰' },
    { name: 'Sponsor 7', logo: '🎖️' },
    { name: 'Sponsor 8', logo: '⛰️' },
  ];

  return (
    <section className="relative h-[90vh] flex flex-col justify-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroBanner} 
          alt="Horse Racing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white mb-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Tradition in Every Trot
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light opacity-80 uppercase tracking-[0.3em]">
          All the latest info about Moroccan leg of the series
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 px-10 py-4 text-xs font-bold tracking-[0.2em] flex items-center gap-3 shadow-2xl shadow-blue-500/20">
            FREE LIVE STREAM <div className="bg-white/20 p-1 rounded-full"><Play size={14} fill="white" /></div>
          </Button>
        </div>
      </div>

      {/* Sponsors Bar */}
      <div className="relative z-10 bg-[#0A1045] py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex items-center justify-between gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0 text-white text-3xl font-black italic">
                {sponsor.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
