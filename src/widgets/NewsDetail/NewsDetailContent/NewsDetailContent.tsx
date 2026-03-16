import React from 'react';

const NewsDetailContent: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Main Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg font-light">
            <div className="flex justify-end mb-8">
               <span className="bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100 italic">
                  March 15, 2024 - 10:49 AM
               </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 leading-tight font-serif uppercase tracking-tight">
              Congratulations to the champions of the Moroccan leg of the UAE President Cup Series
            </h2>

            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">👤</div>
                <div>
                    <span className="text-xs text-gray-400 uppercase tracking-widest block">By</span>
                    <span className="text-sm font-bold text-gray-900 uppercase">Mustafa Hassan</span>
                </div>
            </div>

            <p>
              The winners were honored by His Excellency Omar Abdulrahman Al Attiyah, the UAE Consul in Rabat, His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses, and Omar Al Saqley, the General Manager of the Royal Company for the Encouragement of Horse-Racing.
            </p>
            <p>
              The distinguished winners were celebrated in a formal ceremony, attended by His Excellency Omar Abdulrahman Al Attiyah, the UAE Consul in Rabat, who represents the UAE's diplomatic interests in Morocco. They were joined by His Excellency Faisal Al Rahmani, the Secretary-General of the UAE President's Cup Series Committee for Purebred Arabian Horses, an organization dedicated to promoting and preserving the heritage of Arabian horse racing, which is deeply embedded in the culture of the Gulf region.
            </p>
          </div>

          {/* Image Gallery Row */}
          <div className="flex gap-4">
            <div className="w-1/2 rounded-[40px] overflow-hidden shadow-xl aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1599407981387-578cf36c0757?auto=format&fit=crop&q=80&w=800" 
                alt="Race highlight" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 rounded-[40px] overflow-hidden shadow-xl aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1534491336113-f43405391d84?auto=format&fit=crop&q=80&w=800" 
                alt="Winners portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Secondary Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg font-light">
            <p>
                The Morocco stage of the 2024 UAE President Cup Series witnessed a field of elite Arabian horses from across North Africa and the Gulf region. The race, held under perfect weather conditions with temperatures hovering around 22°C, saw BURAAK break steadily from gate four and settle into a comfortable rhythm in the early stages.
            </p>
            <p>
                NOA GRAD, last year's champion and trained by Jean-François Bernard and piloted by Jean Bernard Eyquem, gave chase throughout but could never quite close the gap, finishing a respectable second and conceding MAD 150,000.
            </p>
            
            {/* Blockquote */}
            <div className="border-l-4 border-red-500 pl-8 py-4 my-12 bg-gray-50/50 italic font-serif">
                <p className="text-2xl text-gray-800 leading-relaxed mb-4">
                    "BURAAK demonstrated exceptional stamina and speed today. This victory is a testament to the quality of Arabian breeding in Morocco and the dedication of our training programs."
                </p>
                <cite className="text-sm font-bold text-gray-500 uppercase tracking-widest block not-italic">
                    — Mohamed Bessouit, Trainer
                </cite>
            </div>

            {/* Featured Image */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl my-12 relative">
                <img 
                    src="https://images.unsplash.com/photo-1599407981387-578cf36c0757?auto=format&fit=crop&q=80&w=1200" 
                    alt="Main Race Image" 
                    className="w-full h-auto"
                />
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/60 text-[10px] uppercase tracking-widest text-center">BURAAK crosses the finish line ahead of the competition at Anfa Racecourse - Casablanca</p>
                </div>
            </div>

            <p>
                The trophy presentation ceremony was attended by His Excellency Omar Abdulrahman Al Attiyah, UAE Consul in Rabat, who congratulated the winning connections and praised the continued growth of Arabian horse racing in Morocco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailContent;
