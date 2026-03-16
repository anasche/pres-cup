import React from 'react';

const RaceDetailHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A0B14] mb-2">
          Morocco Stage
        </h1>
        <div className="text-4xl mb-6">🇲🇦</div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 max-w-4xl mx-auto">
          <p className="text-gray-900 font-bold tracking-tight text-lg">
            Anfa Sand Track - Casablanca
          </p>
        </div>
      </div>
    </section>
  );
};

export default RaceDetailHeader;
