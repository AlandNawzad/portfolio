import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Hero refs
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroSocialsRef = useRef(null);
  const heroScrollRef = useRef(null);

  // About refs
  const aboutRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutCardRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutButtonRef = useRef(null);

  useEffect(() => {
    // Trigger animations
    heroAnimation(
      heroRef.current,
      heroTextRef.current,
      heroImageRef.current,
      heroSocialsRef.current,
      heroScrollRef.current
    );

    aboutAnimation(
      aboutRef.current,
      aboutImageRef.current,
      aboutCardRef.current,
      aboutTextRef.current,
      aboutButtonRef.current
    );

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mx-4 md:mx-48">
      <Navigation />
      <Hero
        ref={heroRef}
        textRef={heroTextRef}
        imageRef={heroImageRef}
        socialsRef={heroSocialsRef}
        scrollRef={heroScrollRef}
      />
      <About
        ref={aboutRef}
        imageRef={aboutImageRef}
        cardRef={aboutCardRef}
        textRef={aboutTextRef}
        buttonRef={aboutButtonRef}
      />
    </div>
  );
}

// Hero Animation
function heroAnimation(container, textEl, imageEl, socialsEl, scrollRef) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top center",        // trigger when Hero top hits center of viewport
      end: "bottom top",          // end when Hero bottom hits top of viewport
      toggleActions: "play reverse play reverse",
      onEnter: () => tl.play(),
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    },
  });

  tl.from(imageEl, { y: -50, opacity: 0, duration: 1.5, ease: "power4.inOut" })
    .from(socialsEl, { y: 50, opacity: 0, duration: 1.5, ease: "power4.inOut" }, "<")
    .from(scrollRef, { y: 50, opacity: 0, duration: 1.5, ease: "power4.inOut" }, "<")
    .from(textEl, { y: -50, opacity: 0, duration: 1.5, ease: "power4.inOut" }, "-=1.3");
}

// About Animation
function aboutAnimation(container, imageEl, cardEl, textEl, buttonEl) {
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: container,
      start: "top 75%",           // trigger when About top hits 75% of viewport
      end: "bottom 25%",          // end when About bottom hits 25% of viewport
      toggleActions: "play reverse play reverse",
      onEnter: () => tl.restart(),
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.restart(),
      onLeaveBack: () => tl.reverse(),
    },
  });

  tl.from(imageEl, { x: -50, opacity: 0, scale: 0.8, duration: 1.5, ease: "power4.inOut" })
    .from(cardEl, { x: 50, opacity: 0,scale: 0.8, duration: 1.5, ease: "power4.inOut" }, "<")
    .from(buttonEl, { x: 50, opacity: 0,scale: 0.8, duration: 1.5, ease: "power4.inOut" }, "<")
    .from(textEl, { x: 50, opacity: 0,scale: 0.8, duration: 1.5, ease: "power4.inOut" }, "-=1.4");
    
}

export default App;
