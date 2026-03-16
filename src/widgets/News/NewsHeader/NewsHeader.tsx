import React from 'react';

const NewsHeader: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-4 border-b border-gray-100">
      <div className="container mx-auto max-w-7xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-[#1a1a1a] leading-tight font-serif uppercase tracking-tight mb-4">
          News
        </h1>
        <p className="text-gray-500 font-medium tracking-[0.2em] uppercase text-xs">
          Explore and read latest news
        </p>
      </div>
    </section>
  );
};

export default NewsHeader;
