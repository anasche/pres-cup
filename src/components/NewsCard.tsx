import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  image: string;
  tag?: string;
  title: string;
  date: string;
  description?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, tag, title, date, description }) => {
  const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

  return (
    <div className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {tag && (
          <div className="absolute top-6 left-6 bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider px-4 py-2 rounded shadow-lg">
             {tag}
          </div>
        )}
      </div>
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-[#0A0B14] mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight uppercase">
          {title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-8 line-clamp-3">
          {description || "The Moroccan leg of the UAE President Cup for Purebred Arabian Horses promises to be an extraordinary event, showcasing the best of Arabian horse heritage..."}
        </p>
        
        <div className="mt-auto">
           <Link to={`/news/${slug}`} className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20">
              Continue Reading
              <div className="bg-white/20 p-1 rounded-full">
                <ArrowRight size={14} fill="white" />
              </div>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
