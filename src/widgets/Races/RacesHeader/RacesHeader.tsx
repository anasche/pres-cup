import React from 'react';
import Title from '@/components/Title';

const RacesHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Title as="h1" dark={true} className="mb-3">
          Events & Races
        </Title>
        <p className="text-black/50 font-medium text-[15px] tracking-tightest max-w-2xl mx-auto">
          Follow the latest events and races in the league
        </p>
      </div>
    </section>
  );
};

export default RacesHeader;
