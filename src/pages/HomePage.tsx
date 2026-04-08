import React from 'react';
import Hero from '../components/HeroSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Process />
      <Testimonials />
    </main>
  );
};

export default Home;