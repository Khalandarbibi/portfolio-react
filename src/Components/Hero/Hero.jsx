import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <img src={profile_img} alt="Khalandar Bibi" className='hero-img' />
      <h1>
        I'm <span className='highlight-purple'>Khalandar</span> <span className='highlight-orange'>Bibi</span>,<br />
        Student of MCE.
      </h1>
      <p>
        I am a Computer Science student at MCE, passionate about technology, programming,
        and solving real-world problems through innovative software solutions.
      </p>
      <div className='hero-action'>
        <button className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></button>
        <button className="hero-resume">My Resume</button>
      </div>
    </section>
  );
};

export default Hero;
