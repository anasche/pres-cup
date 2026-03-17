import React from 'react';
import Title from '@/components/Title';

const NewsHeader: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-10 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <Title as="h1" dark={true} className="mb-3">
          News
        </Title>
        <p className="text-black/50 font-medium text-[15px] tracking-tightest">
          Explore and read latest news.
        </p>
      </div>
    </section>
  );
};

export default NewsHeader;
