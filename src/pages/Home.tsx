import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/widgets/Home/Hero/Hero';
import LiveEvent from '@/widgets/Home/LiveEvent/LiveEvent';
import News from '@/widgets/Home/News/News';
import BookExperience from '@/widgets/Home/BookExperience/BookExperience';
import EventsCalendar from '@/widgets/Home/EventsCalendar/EventsCalendar';
import Winners from '@/widgets/Home/Winners/Winners';
import FAQ from '@/widgets/Home/FAQ/FAQ';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <LiveEvent />
      <News />
      <BookExperience />
      <EventsCalendar />
      <Winners />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
