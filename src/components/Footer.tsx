import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Linkedin, Mail } from 'lucide-react';
import Logo from '@/assets/logo/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-24 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <img src={Logo} alt="UAE President Cup" className="h-20 w-auto object-contain mb-6 filter brightness-0 invert" />
          <h2 className="text-3xl font-bold tracking-tighter mb-4">PRESIDENT CUP SERIES</h2>
          <p className="text-blue-200/60 max-w-lg italic font-serif">
            "Promoting the heritage and nobility of the Purebred Arabian Horse across the globe."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-y border-white/10 py-16 mb-12">
          <div>
            <h3 className="text-blue-400 font-black uppercase tracking-[0.2em] text-xs mb-8">Events</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Upcoming Races</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Live Stream</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Results Archive</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Event Tickets</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-black uppercase tracking-[0.2em] text-xs mb-8">About</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Our Heritage</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Purebred Arabians</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Organizational Board</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-black uppercase tracking-[0.2em] text-xs mb-8">Help Center</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Contact Support</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">FAQ</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Media Assets</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors font-bold">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"><Instagram size={20}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"><Twitter size={20}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"><Facebook size={20}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"><Youtube size={20}/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"><Linkedin size={20}/></a>
          </div>
          
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
            © {currentYear} UAE PRESIDENT CUP. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
             <Mail size={16}/> CONTACT@PRESIDENTCUP.AE
          </div>
        </div>
      </div>

      <div className="h-2 bg-blue-600 mt-12"></div>
    </footer>
  );
};

export default Footer;
