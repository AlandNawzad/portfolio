import React from 'react'
import myImage from "../assets/me.png"

const Hero = React.forwardRef((props, ref) => {

  return (
    <div
      ref={ref}
      className='container flex justify-center mt-10'
    >
      <div className='flex flex-col gap-8 mt-10'>
        {/* hero text */}
        <div className='text-center'>
          <p className='font-poppins text-portfolio-foreground font-semibold text-sm text-portfolio-primaryText mb-2'>Hello, I'm</p>
          <h1 className='font-poppins font-bold text-portfolio-primary text-2xl md:text-4xl'>Aland Nawzad</h1>
          <h3 className='font-poppins text-portfolio-secondaryText text-xs mt-3 md:text-sm'>Full Stack Web Developer</h3>
        </div>

        {/* hero buttons  */}
        <div className='flex gap-5 justify-center'>
          <button className='border border-portfolio-primary rounded-xl p-3 text-portfolio-primary font-medium hover:bg-portfolio-primary hover:text-portfolio-background transition-colors duration-300 '>Download CV</button>
          <button className='bg-portfolio-primary rounded-xl py-3 px-4 font-medium hover:opacity-85 transition-opacity duration-300 md:px-6 md:py-3'>About</button>
        </div>

        <div className='bg-gradient-to-b from-portfolio-primary to-portfolio-surface  h-80 rounded-t-full '></div>
      </div>



    </div>
  );

});

export default Hero