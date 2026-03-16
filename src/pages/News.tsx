import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsHeader from '@/widgets/News/NewsHeader/NewsHeader';
import NewsGrid from '@/widgets/News/NewsGrid/NewsGrid';

const News: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <NewsHeader />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default News;
