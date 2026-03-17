import React from 'react';
import Title from '@/components/Title';

const RaceDetailHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Title as="h1" dark={true} className="mb-2 text-[40px] md:text-[52px] xl:text-[60px]">
          Morocco Stage
        </Title>
        <div className="text-3xl mb-4">🇲🇦</div>

        <div className="mt-6 pt-6 border-t border-gray-100 max-w-4xl mx-auto">
          <p className="text-gray-700 font-medium text-[15px]">
            Anfa Sand Track - Casablanca
          </p>
        </div>
      </div>
    </section>
  );
};

export default RaceDetailHeader;
