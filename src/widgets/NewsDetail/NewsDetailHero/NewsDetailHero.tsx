import React from 'react';

const NewsDetailHero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1598974357801-cbca100e0444?auto=format&fit=crop&q=80&w=2000" 
          alt="News Detail Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-black/40 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
              Latest News
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight font-serif uppercase tracking-tight max-w-4xl">
              BURAAK Claims Victory in <br /> Thrilling Morocco Stage Finale
            </h1>
            <p className="text-blue-100/80 text-lg font-medium italic font-serif">
              UAE President Cup Series Crowns Champions at Casablanca's Historic Anfa Racecourse
            </p>
            
            <div className="flex items-center gap-8 pt-4 border-t border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">👤</span> Sarah Al Mansouri
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">📅</span> Sunday, March 15, 2024
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">⏱️</span> 5 min read
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailHero;
