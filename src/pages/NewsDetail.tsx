import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsDetailHero from '@/widgets/NewsDetail/NewsDetailHero/NewsDetailHero';
import NewsDetailContent from '@/widgets/NewsDetail/NewsDetailContent/NewsDetailContent';

const NewsDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <NewsDetailHero />
      <NewsDetailContent />
      <Footer />
    </div>
  );
};

export default NewsDetail;
