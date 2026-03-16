import React from 'react';
import { User, Trophy, Star, Shield, Award } from 'lucide-react';

const Winners: React.FC = () => {
  const winners = [
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'DAISSAOUI MOHAMED', rank: 4 },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'DAISSAOUI MOHAMED', rank: 4 },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'DAISSAOUI MOHAMED', rank: 4 },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'DAISSAOUI MOHAMED', rank: 4 },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'DAISSAOUI MOHAMED', rank: 4 },
    { horse: 'arrow eagle', owner: 'DAISSAOUI MOHAMED', trainer: 'DAISSAOUI MOHAMED', jockey: 'DAISSAOUI MOHAMED', rank: 4 },
  ];

  const DetailRow = ({ icon: Icon, label, value, color }: any) => (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <div className={`p-1.5 rounded-full ${color || 'bg-white/10 text-white/40'}`}>
          <Icon size={12} />
        </div>
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-[10px] font-black text-white/90 uppercase tracking-tight">{value}</span>
    </div>
  );

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-[#0A0B14] mb-4">Winners of the Race</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <div key={index} className="bg-[#0A1045] rounded-[40px] p-8 shadow-2xl relative group hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Jockey Silk Icon placeholder/SVG from design */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <img src="https://img.icons8.com/color/96/jockey-silk.png" alt="Silk" className="w-12 h-12" />
                </div>
                <div className="bg-blue-600/20 text-blue-400 p-3 rounded-2xl">
                   <Trophy size={24} />
                </div>
              </div>

              <h3 className="text-lg font-black text-white mb-6 uppercase tracking-tight border-l-4 border-blue-600 pl-4">
                Moroccan leg of the UAE President Cup Series
              </h3>

              <div className="space-y-1">
                <DetailRow icon={Star} label="Horse" value={winner.horse} color="bg-yellow-500/20 text-yellow-500" />
                <DetailRow icon={User} label="Owner" value={winner.owner} />
                <DetailRow icon={Shield} label="Trainer" value={winner.trainer} />
                <DetailRow icon={Award} label="Jockey" value={winner.jockey} />
                <DetailRow icon={Star} label="Rank" value={winner.rank} />
              </div>
              
              {/* Decorative gradient corner */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Winners;
