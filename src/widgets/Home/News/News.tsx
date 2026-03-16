import React from 'react';
import { ArrowRight } from 'lucide-react';
import NewsCard from '@/components/NewsCard';

const News: React.FC = () => {
  const newsItems = [
    {
      image: 'https://images.unsplash.com/photo-1598974357801-cbca100e0444?auto=format&fit=crop&q=80&w=600',
      tag: 'Arabian Horse News',
      title: 'Congratulations to the champions of the Moroccan leg of the UAE President Cup Series',
      date: 'March 15, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1534491336113-f43405391d84?auto=format&fit=crop&q=80&w=600',
      tag: 'Competition News',
      title: 'Tomorrow, the eleventh leg of the UAE President Cup for Purebred Arabian Horses flags off',
      date: 'March 14, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1599407981387-578cf36c0757?auto=format&fit=crop&q=80&w=600',
      tag: 'Arabian Horse News',
      title: 'Tomorrow, the Netherlands hosts the ninth leg of the President Cup for Arabian Horses',
      date: 'March 13, 2024'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">News</h2>
            <p className="text-gray-500">Stay updated with the latest from the world of horse racing</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold mt-4 md:mt-0 group uppercase tracking-widest text-sm">
            View All News <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
