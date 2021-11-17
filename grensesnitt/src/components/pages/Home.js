import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Menu from '../Menu';
import Footer from '../Footer';

function Home() {
  
  return (
    <>
      <HeroSection />
      <Cards />
      <Menu />
      <Footer />
    </>
  );
  
}

export default Home;
