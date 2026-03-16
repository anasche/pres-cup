import React from 'react';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

const BookExperience: React.FC = () => {
  return (
    <section className="relative h-[450px] flex items-center overflow-hidden group">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1599407954933-728b7593c6df?auto=format&fit=crop&q=80&w=2000" 
          alt="Horse Racing Experience" 
          className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="max-w-xl">
          <div className="bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full mb-6 inline-block tracking-widest uppercase">EXCLUSIVE ACCESS</div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
            Book Your Experience
          </h2>
          <p className="text-white/70 text-sm mb-10 leading-relaxed max-w-md">
            Reserve your spot for the most prestigious horse racing events in the region. Experience luxury seating and exceptional hospitality.
          </p>
          <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-[10px] font-black tracking-widest flex items-center gap-4 shadow-2xl shadow-blue-600/30">
            BOOK EXPERIENCE
            <div className="bg-white/20 p-1 rounded-full">
              <ArrowRight size={14} fill="white" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookExperience;
