import React from 'react';
import { Search } from 'lucide-react';

interface PersonnelHeaderProps {
  title: string;
  placeholder: string;
}

const PersonnelHeader: React.FC<PersonnelHeaderProps> = ({ title, placeholder }) => {
  return (
    <section className="pt-32 pb-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0A0B14] mb-4">
          {title}
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Here you will find the {title.toLowerCase()}' honours list.
        </p>
        
        <div className="max-w-xl mx-auto relative group">
          <input 
            type="text" 
            placeholder={placeholder}
            className="w-full bg-gray-50 border border-gray-100 rounded-full px-8 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all pl-14 shadow-sm"
          />
          <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
        </div>
        
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-8">
          Top {title.toLowerCase()}
        </p>
      </div>
    </section>
  );
};

export default PersonnelHeader;
