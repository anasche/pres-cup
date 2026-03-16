import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RacesHeader from '@/widgets/Races/RacesHeader';
import UpcomingRace from '@/widgets/Races/UpcomingRace';
import RaceGrid from '@/widgets/Races/RaceGrid';

const Races: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <RacesHeader />
        <UpcomingRace />
        <RaceGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Races;
