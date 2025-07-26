import React, { useRef, useEffect } from "react";
import gsap from "gsap/src";
import { ScrollTrigger } from "gsap/all";


import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

gsap.registerPlugin([ScrollTrigger])

function App() {
  const heroRef = useRef(null);




  useEffect(() => {

    const sections = [
      { ref: heroRef, animation: heroAnimation }
    ];

    sections.forEach(({ ref, animation }) => {
      animation(ref.current);
    });

    return () => {
      // Clean up all ScrollTrigger instances on unmount to prevent memory leaks or duplicate animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });


  return (
    <div className="mx-4 md:mx-44">
      <Navigation />
      <Hero ref={heroRef} />
      
    </div>
  );



// animation functions

  function heroAnimation(el) {
    gsap.fromTo(
      el,
      { y: -60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }




}



export default App;
