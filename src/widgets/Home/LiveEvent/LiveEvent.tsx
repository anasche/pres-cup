import React from 'react';
import { Play, Eye, Clock } from 'lucide-react';

const LiveEvent: React.FC = () => {
  const sidebarVideos = [
    { id: 1, title: 'WATCH: Moroccan leg of the UAE President Cup Series', time: '12:45', plays: '1.2k', label: 'LIVE', active: true },
    { id: 2, title: 'WATCH: Moroccan leg of the UAE President Cup Series', time: '12:45', plays: '1.2k', label: 'NEW', active: false },
    { id: 3, title: 'WATCH: Moroccan leg of the UAE President Cup Series', time: '12:45', plays: '1.2k', label: 'NEW', active: false },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#0A0B14] mb-4">Live Event</h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
            Watch the latest leg in Morocco and more about racing events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1599407950360-8b8642d423dc?auto=format&fit=crop&q=80&w=1200" 
              alt="Main Live" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                <Play size={40} fill="white" className="ml-2" />
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-6 left-6 flex gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-white text-[10px] font-bold">
                  MOROCCO <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
               </div>
               <div className="flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-white">
                  <div className="flex items-center gap-2 text-[10px] font-bold border-r border-white/20 pr-3">
                    <Eye size={14} /> 14.5K
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold">
                    <Clock size={14} /> 00:43
                  </div>
               </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-10 left-10">
               <h3 className="text-3xl font-bold text-white mb-2 leading-tight max-w-xl">
                 Moroccan Leg of the UAE President Cup For Purebred Arabian Horses
               </h3>
            </div>
          </div>

          {/* Sidebar Videos */}
          <div className="lg:col-span-4 space-y-6">
            {sidebarVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-3 border-2 border-transparent hover:border-blue-600/20 transition-all">
                  <img 
                    src={`https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=600&sig=${video.id}`} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={24} fill="white" />
                  </div>
                  <div className="absolute top-3 right-3">
                     <div className={`${video.active ? 'bg-red-600' : 'bg-red-500'} text-white text-[9px] font-black px-2 py-1 rounded shadow-lg`}>
                       {video.label}
                     </div>
                  </div>
                </div>
                <h4 className="text-xs font-bold tracking-tight text-[#0A0B14] leading-relaxed group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEvent;
