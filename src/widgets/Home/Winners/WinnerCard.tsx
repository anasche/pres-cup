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
    <div className="bg-[#141473] rounded-[30px] p-8 text-white shadow-xl relative overflow-hidden flex flex-col items-center">
      <h3 className="text-[24px] font-medium leading-[1.2] text-center mb-8 px-4 max-w-[350px]">
        Moroccan leg of the UAEPresidentCup Series
      </h3>

      <div className="flex items-center gap-10 mb-10">
        <div className="flex items-center gap-2 text-white/80">
          <Clock size={16} className="text-white/60" />
          <span className="text-xs font-medium">{winner.time || "02:21:43"}</span>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Globe size={16} className="text-white/60" />
          <span className="text-xs font-medium">{winner.distance || "2,000 Km"}</span>
        </div>
      </div>

      <div className="flex items-center w-full justify-between mt-auto">
        <div className="flex-shrink-0">
          <img src={Winners1} alt="Silk" className="w-16 h-16 object-contain" />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center">
              <User size={16} className="text-white/60" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-medium">Jockey</span>
              <span className="text-base font-bold leading-tight capitalize">{winner.jockey.split(' ')[0].toLowerCase()}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center">
              <Shield size={16} className="text-white/60" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-medium">Trainer</span>
              <span className="text-base font-bold leading-tight capitalize">{winner.trainer.split(' ')[0].toLowerCase()}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center">
              <Globe size={16} className="text-white/60" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-medium">Owner</span>
              <span className="text-base font-bold leading-tight capitalize">{winner.owner.split(' ')[0].toLowerCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
