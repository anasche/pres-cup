import React from 'react';

const RacesHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0B14] mb-4">
          Events & Races
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Follow the latest events and races in the league
        </p>
      </div>
    </section>
  );
};

export default RacesHeader;
