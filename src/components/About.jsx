import React from 'react';
import { FaAward } from 'react-icons/fa6';
import aboutImage from '../assets/about-image.jpg';

const About = ({ imageRef, cardRef, textRef, buttonRef }, ref) => {
  return (
    <div className="h-screen">
      {/* About header */}
      <div className="text-center mt-4">
        <p className="text-gray-500 text-sm">My intro</p>
        <h1 className="text-portfolio-primary text-2xl font-bold">About Me</h1>
      </div>

      <div className="flex mt-12 gap-20 flex-col justify-center items-center md:items-start md:flex-row">
        {/* image */}
        <img
          src={aboutImage}
          alt="about image"
          className="object-cover rounded-xl w-60 h-60 md:w-72 md:h-72"
          ref={imageRef}
        />

        {/* content - modified container with fixed width */}
        <div className="flex flex-col gap-5 w-80 items-center md:items-start md:w-[28rem]">
          {/* icons row */}
          <div ref={cardRef} className="flex items-start gap-3 w-full md:gap-6">
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </div>

          {/* about text with controlled max width */}
          <p ref={textRef} className="text-portfolio-secondaryText text-balance max-w-xs text-center text-xs md:text-base md:text-left md:max-w-none">
            I'm a dedicated full-stack developer with a BSc in Computer Science,
            committed to effective problem-solving, teamwork, and continuous growth.
          </p>

          {/* contact me Button */}
          <button
            ref={buttonRef} className="bg-portfolio-primary text-black w-fit p-3 rounded-lg font-medium text-sm  md:text-base"
          >
            Contact me
          </button>
        </div>
      </div>
    </div>
  );

  function AboutCard() {
    return (
      <div className="flex-1 bg-portfolio-surface text-center flex flex-col items-center justify-center rounded-xl py-3 px-4 md:py-5 md:px-6">
        <FaAward className="text-xl text-portfolio-primary mb-2" />
        <h2 className="text-portfolio-primaryText font-semibold text-xs md:text-sm">Experience</h2>
        <p className="text-portfolio-secondaryText text-[0.6rem] md:text-xs">1+ years</p>
      </div>
    );
  }
};

export default React.forwardRef(About);