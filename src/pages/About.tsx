import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/widgets/About/AboutHero/AboutHero';
import BoardMembers from '@/widgets/About/BoardMembers/BoardMembers';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AboutHero />
      <BoardMembers />
      <Footer />
    </div>
  );
};

export default About;
