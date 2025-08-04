import React from 'react'

import { FaAward } from 'react-icons/fa6';
import aboutImage from '../assets/about-image.jpg'

const About = ({ textRef, imageRef, socialsRef, scrollRef }, ref) => {
    return (
        <div className='container h-screen'>
            {/* About header */}
            <div className='text-center mt-4'>
                <p className='text-gray-500 text-sm'>My intro</p>
                <h1 className='text-portfolio-primary text-2xl font-bold'>About Me</h1>
            </div>

            <div className='flex mt-12 gap-16'>
                {/* iamge */}
                <img src={aboutImage} alt="about image" className='w-72 h-72 object-cover rounded-xl' />


                {/* content */}
                <div className='flex flex-col gap-5'>

                    {/* icons */}
                    <div className='flex gap-10'>
                        <AboutCard />
                        <AboutCard />
                        <AboutCard />
                    </div>

                    {/* about text */}
                    <p className='text-portfolio-secondaryText w-4/6'>Motivated web developer with a BSc in Computer Science and full-stack experience in React, Node.js, and Python. Created projects like Tourist Helper and Dengify,
                     committed to quality and teamwork.</p>

                    <button className='bg-portfolio-primary text-black w-fit p-3 rounded-lg font-medium transition-opacity hover:opacity-85 duration-300'>Contact me</button>
                </div>
            </div>
        </div>
    );


    function AboutCard() {
        return (
            <div className='bg-portfolio-surface text-center flex flex-col items-center justify-center py-5 px-10 rounded-xl'>
                <FaAward className='text-xl text-portfolio-primary mb-2' />
                <h2 className='text-portfolio-primaryText font-semibold'>Experience</h2>
                <p className='text-portfolio-secondaryText text-xs'>1+ years</p>
            </div>

        );
    }


};

export default React.forwardRef(About);
