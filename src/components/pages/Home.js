import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Products from '../Products';
import Aboutme from '../Aboutme';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Aboutme/>
      <Products/>
      <Footer />
    </>
  );
}

export default Home;
