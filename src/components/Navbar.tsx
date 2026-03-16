import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/logo/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events & Races', path: '/races' },
    { name: 'Ticket', path: '#' },
    { name: 'Horses & People', path: '/personnel/horses' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={Logo} alt="UAE President Cup" className="h-12 w-auto object-contain" />
            {/* <div className={`flex flex-col leading-tight ${isScrolled ? 'text-gray-900' : 'text-white md:text-gray-900'} transition-colors`}>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">UAE PRESIDENT CUP</span>
                <span className="text-[8px] font-medium tracking-[0.1em] text-gray-400">PUREBRED ARABIAN CLASSIC SERIES</span>
            </div> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-bold tracking-wider uppercase border-b-2 border-transparent hover:border-blue-600 pb-1 transition-all ${isScrolled ? 'text-gray-800' : 'text-white md:text-gray-900'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={`hidden lg:flex items-center space-x-6 ${isScrolled ? 'text-gray-800' : 'text-white md:text-gray-900'}`}>
             <div className="flex items-center gap-1 text-[11px] font-bold cursor-pointer group">
                EN <span className="group-hover:translate-y-0.5 transition-transform">▾</span>
             </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white md:text-gray-900'} focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 text-sm font-bold tracking-widest uppercase hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
