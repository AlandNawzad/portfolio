import React from 'react';

import myImage from "../assets/hero-image.png";
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { FaComputerMouse } from 'react-icons/fa6';

const Hero = ({ textRef, imageRef, socialsRef,scrollRef }, ref) => {
  return (
    <div ref={ref} className='container h-screen mt-10 '>
      <div className='flex flex-col gap-10 mt-6 items-center'>

        {/* Hero text */}
        <div ref={textRef}>
          <div className='text-center mt-2'>
            <p className='font-poppins text-portfolio-foreground font-semibold text-sm text-portfolio-primaryText mb-2'>
              Hello, I'm
            </p>
            <h1 className='font-poppins font-bold text-portfolio-primary text-2xl md:text-4xl'>
              Aland Nawzad
            </h1>
            <h3 className='font-poppins text-portfolio-secondaryText text-xs mt-3 md:text-sm'>
              Full Stack Web Developer
            </h3>
          </div>

          {/* Hero buttons */}
          <div className='flex gap-5 justify-center mt-6'>
            <button className='border border-portfolio-primary rounded-xl p-3 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-portfolio-background transition-colors duration-300'>
              Download CV
            </button>
            <button className='bg-portfolio-primary rounded-xl py-3 px-4 font-medium hover:opacity-85 transition-opacity duration-300 md:px-6 md:py-3'>
              About
            </button>
          </div>
        </div>

        {/* Wrapper for image and socials */}
        <div className="relative flex justify-center mt-8 w-full">

          {/* Socials - aligned to far left of screen, vertically centered with image */}
          <div
            ref={socialsRef}
            className="absolute left-0 top-1/2 -translate-y-1/4 flex flex-col gap-4 text-sm md:text-lg"
          >
            <button className=' bg-portfolio-surface rounded-xl p-2 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-white transition-colors duration-300'>
              <FaLinkedin />
            </button>
            <button className=' bg-portfolio-surface rounded-xl p-2 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-white transition-colors duration-300'>
              <FaGithub />
            </button>
            <button className=' bg-portfolio-surface rounded-xl p-2 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-white transition-colors duration-300'>
              <FaEnvelope />
            </button>
            <div className='text-portfolio-primary text-center text-4xl font-extralight'>|</div>
          </div>

          {/* Centered Hero Image */}
          <div
            ref={imageRef}
            className='bg-gradient-to-b from-portfolio-primary to-portfolio-surface h-72 w-48 rounded-t-full flex items-end justify-center md:w-64 md:h-90'
          >
            <img src={myImage} alt="image of me" className='w-36' />
          </div>

          {/* Scroll button on the right*/}
          <div
            ref={scrollRef}
            className="absolute right-0 top-[70%] -translate-y-1/2 flex flex-col gap-4 hover:cursor-pointer"
            onClick={() => location.href='#about'}
          >
            <div className='flex flex-col gap-4 items-center p-2'>
              <div className=' text-portfolio-primary font-medium text-md md:text-lg'>
                <FaComputerMouse />
              </div>
              <div className='text-portfolio-primary [writing-mode:vertical-rl] rotate-180 text-xs md:text-sm'>Scroll Down</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Hero);
