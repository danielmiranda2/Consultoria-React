import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>SUELEN VELASCO</h1>
      <p>Consultoria de Imagem</p>
      <h3>“A beleza está em transbordar a sua essência”</h3>
      </div>
  );
}

export default HeroSection;
