import React from 'react';
import '../../App.css';
import About from '../About';
import HeroSection from '../HeroSection';
import Menu from '../Menu';
import Footer from '../Footer';

function Home() {
  
  return (
    <>
      <HeroSection />
      <About />
      <Menu />
      <Footer />
    </>
  );
  
}

export default Home;
