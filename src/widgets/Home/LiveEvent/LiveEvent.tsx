import { Play, Share2, Clock } from "lucide-react";
import Title from "@/components/Title";
import Event1 from "@/assets/images/events/event-1.png";
import Event2 from "@/assets/images/events/event-1.png";
import Event3 from "@/assets/images/events/event-1.png";
import Event4 from "@/assets/images/events/event-1.png";

const LiveEvent: React.FC = () => {
  const sidebarVideos = [
    {
      id: 1,
      title: "UAE President’s Cup 2026 – Highlights Day 1",
      thumbnail: Event2,
    },
    {
      id: 2,
      title: "Training Session: Behind the Scenes",
      thumbnail: Event3,
    },
    {
      id: 3,
      title: "Training Session: Behind the Scenes",
      thumbnail: Event4,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1728px] mx-auto px-6 xl:px-[77px]">
        <div className="text-center mb-16">
          <Title dark={true} className="mb-4">
            Live Event
          </Title>
          <p className="font-medium text-[15px] leading-relaxed text-black/60 text-center max-w-2xl mx-auto">
            Watch the UAE President's Cup live and enjoy the latest horse racing action and highlights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-8 relative overflow-hidden group cursor-pointer shadow-2xl aspect-[1144/622] rounded-t-[16px] rounded-b-[11px]">
            <img
              src={Event1}
              alt="Main Live"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 group-hover:bg-black/10 transition-colors bg-[linear-gradient(180deg,rgba(4,4,67,0)_50.06%,#000000_92.69%)]"></div>

            {/* Top Bar Overlays */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-white tracking-widest uppercase">Live Now</span>
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></span>
              </div>
              <div className="flex gap-6">
                <button className="flex flex-col items-center gap-1.5 group/btn">
                  <div className="w-10 h-10 flex items-center justify-center text-white">
                    <Clock size={28} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider opacity-90">Watch later</span>
                </button>
                <button className="flex flex-col items-center gap-1.5 group/btn">
                  <div className="w-10 h-10 flex items-center justify-center text-white">
                    <Share2 size={28} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider opacity-90">Share</span>
                </button>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-14 bg-[#FF0000] rounded-[20px] flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E60000]">
                <Play size={32} fill="white" strokeWidth={0} />
              </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-10 left-10">
              <h3 className="text-[28px] font-bold text-white leading-tight max-w-xl">
                Moroccan Leg of the #UAEPresidentCup <br />
                for Purebred Arabian Horses
              </h3>
            </div>
          </div>

          {/* Sidebar Videos */}
          <div className="lg:col-span-4 space-y-6">
  {sidebarVideos.map((video) => (
    <div key={video.id} className="group cursor-pointer">
      <div className="relative w-[333px] h-[166px] overflow-hidden border-2 border-transparent hover:border-blue-600/20 transition-all rounded-[12px]">
        
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />

        {/* Gradient + Title */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_86.5%)]">
          <h4 className="text-[11px] font-bold text-white leading-snug max-w-[240px]">
            {video.title}
          </h4>
        </div>

        {/* Live Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-lg">
            Live
          </div>
        </div>

      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default LiveEvent;
