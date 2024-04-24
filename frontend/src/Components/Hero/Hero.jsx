import React from 'react'; 
import './Hero.css';
import image from '../Assets/image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>THE LEARNING ROADMAPS🎯</h2>
        <div>
            <p id='firstline'>KNOWLEDGE IS AT</p>
            <p id='secondline'>YOUR FINGERTIPS!</p>
            <div>
                <p>✔️ Learn</p>
                <p>✔️ Innovate</p>
                <p>✔️ Excel</p>
            </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
