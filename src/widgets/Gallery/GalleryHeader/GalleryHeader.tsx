import React from 'react';

const GalleryHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0B14] mb-4">
          A Year-by-Year Journey Horse Racing Galleries
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-4xl mx-auto">
          Immerse yourself in the timeless beauty and thrilling moments of horse racing as we take you on a captivating visual journey through our year-by-year horse racing galleries
        </p>
      </div>
    </section>
  );
};

export default GalleryHeader;
