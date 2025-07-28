import React from 'react';

import myImage from "../assets/me.png";
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';

const Hero = ({ textRef, imageRef, iconRef }, ref) => {
  return (
    <div ref={ref} className='container flex justify-center mt-10'>
      <div className='flex flex-col gap-8 mt-6 items-center'>

        {/* Hero text */}
        <div ref={textRef}>
          <div className='text-center'>
            <p className='font-poppins text-portfolio-foreground font-semibold text-sm text-portfolio-primaryText mb-2'>Hello, I'm</p>
            <h1 className='font-poppins font-bold text-portfolio-primary text-2xl md:text-4xl'>Aland Nawzad</h1>
            <h3 className='font-poppins text-portfolio-secondaryText text-xs mt-3 md:text-sm'>Full Stack Web Developer</h3>
          </div>

          {/* Hero buttons */}
          <div className='flex gap-5 justify-center mt-6'>
            <button className='border border-portfolio-primary rounded-xl p-3 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-portfolio-background transition-colors duration-300'>Download CV</button>
            <button className='bg-portfolio-primary rounded-xl py-3 px-4 font-medium hover:opacity-85 transition-opacity duration-300 md:px-6 md:py-3'>About</button>
          </div>
        </div>

        {/* socials */}
        <div className="absolute top-1/2 left-4 md:left-44 md:top-auto md:bottom-1/4" ref={iconRef}>
          <div className='flex flex-col gap-4 '>
            <button className='text-lg bg-portfolio-surface rounded-xl p-2 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-white transition-colors duration-300'><FaLinkedin /></button>
            <button className='text-lg bg-portfolio-surface rounded-xl p-2 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-white transition-colors duration-300'><FaGithub /></button>
            <button className='text-lg bg-portfolio-surface rounded-xl p-2 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-white transition-colors duration-300'><FaWhatsapp /></button>
          </div>

        </div>

        {/* Hero image */}
        <div ref={imageRef} className='bg-gradient-to-b from-portfolio-primary to-portfolio-surface h-72 w-48 rounded-t-full mt-6 flex items-end justify-center md:w-64  '>
          <img src={myImage} alt="iamge of me" className='w-36' />
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Hero);
