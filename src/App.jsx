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
  gsap.timeline({
    scrollTrigger: {
      trigger: container,
      // start: "top 80%",      // trigger when Hero top hits 80% of viewport
      // end: "bottom top",     // end when Hero bottom hits top of viewport
      toggleActions: "play reverse play reverse",
      markers: true,
    },
  })
    .from(imageEl, { y: -50, opacity: 0, duration: 2, ease: "power4.inOut", immediateRender: false })
    .from(socialsEl, { y: 50, opacity: 0, duration: 2, ease: "power4.inOut", immediateRender: false }, "<")
    .from(scrollRef, { y: 50, opacity: 0, duration: 2, ease: "power4.inOut", immediateRender: false }, "<")
    .from(textEl, { y: -50, opacity: 0, duration: 2, ease: "power4.inOut", immediateRender: false }, "-=1.8");
}

// About Animation
function aboutAnimation(container, imageEl, cardEl, textEl, buttonEl) {
  gsap.timeline({
    scrollTrigger: {
      trigger: container,
      // start: "top 80%",      // trigger when About top hits 80% of viewport
      // end: "bottom top",     // end when About bottom hits top of viewport
      toggleActions: "play reverse play reverse",
      markers: true,
    },
  })
    .from(imageEl, { y: -50, opacity: 0, duration: 2, ease: "power4.inOut", immediateRender: false })
    .from(cardEl, { y: 50, opacity: 0, duration: 2, ease: "power4.inOut", immediateRender: false }, "<")
    .from(textEl, { y: -50, opacity: 0, duration: 2, ease: "power4.inOut", immediateRender: false }, "<")
    .from(buttonEl, { y: 50, opacity: 0, duration: 2, ease: "power4.inOut", immediateRender: false }, "<");
}

export default App;
