import React from 'react';
import Title from '@/components/Title';

const GalleryHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Title as="h1" dark={true} className="mb-3 text-[40px] md:text-[52px] xl:text-[60px] leading-tight">
          A Year-by-Year Journey Horse Racing Galleries
        </Title>
        <p className="text-black/50 font-medium text-[14px] max-w-2xl mx-auto leading-relaxed">
          Immerse yourself in the timeless beauty and thrilling moments of horse racing as we take you on a captivating visual journey through our year-by-year horse racing galleries
        </p>
      </div>
    </section>
  );
};

export default GalleryHeader;
