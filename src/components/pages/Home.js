import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import SimpleSlider from '../SimpleSlider';
import Aboutme from '../Aboutme';


function Home() {
  return (
    <>
      
      <div id="hero">
        <HeroSection />
      </div>
      <div style={{ display: 'none' }}>
      <Cards/>
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="slider">
        <SimpleSlider />
      </div>
      {/* <div id="facSection">
        <FacSection/>
      </div>
      <div id="facSection">
        <FacSection/>
      </div> */}
      <Footer />
    </>
  );
}

export default Home;
