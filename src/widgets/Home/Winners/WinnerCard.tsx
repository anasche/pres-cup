import React from 'react';
import { Clock, Globe, User, Shield } from 'lucide-react';
import Winners1 from "@/assets/images/winners/winners.png";

interface WinnerCardProps {
  winner: {
    horse: string;
    owner: string;
    trainer: string;
    jockey: string;
    rank?: number;
    time?: string;
    distance?: string;
  };
}

const WinnerCard: React.FC<WinnerCardProps> = ({ winner }) => {
  return (
    <div className="bg-[#141473] rounded-[30px] p-6 text-white shadow-xl relative overflow-hidden flex flex-col">
      <h3 className="font-syne font-normal text-[35px] leading-[35px] tracking-[-0.03em] text-center mb-6 px-2 break-words">
        Moroccan leg of the UAEPresidentCup Series
      </h3>

      <div className="flex items-center justify-center gap-8 mb-8">
        <div className="flex items-center gap-2 text-white/80">
          <Clock size={16} className="text-white/60" />
          <span className="text-xs font-medium">{winner.time || "02:21:43"}</span>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Globe size={16} className="text-white/60" />
          <span className="text-xs font-medium">{winner.distance || "2,000 Km"}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-shrink-0">
            <img src={Winners1} alt="Silk" className="w-16 h-16 object-contain" />
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <User size={14} className="text-white/60" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] text-white/40 font-medium">Jockey</span>
                <span className="text-sm font-bold leading-tight capitalize truncate">{winner.jockey.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <Shield size={14} className="text-white/60" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] text-white/40 font-medium">Trainer</span>
                <span className="text-sm font-bold leading-tight capitalize truncate">{winner.trainer.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center flex-shrink-0">
                <Globe size={14} className="text-white/60" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] text-white/40 font-medium">Owner</span>
                <span className="text-sm font-bold leading-tight capitalize truncate">{winner.owner.split(' ')[0].toLowerCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
