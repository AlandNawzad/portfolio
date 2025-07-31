import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroSocialsRef = useRef(null);
  const heroScrollRef = useRef(null);

  useEffect(() => {
    heroAnimation(heroRef.current, heroTextRef.current, heroImageRef.current, heroSocialsRef.current,heroScrollRef.current);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="mx-4 md:mx-44">
      <Navigation />
      <Hero
        ref={heroRef}
        textRef={heroTextRef}
        imageRef={heroImageRef}
        socialsRef={heroSocialsRef}
        scrollRef={heroScrollRef}
      />
    </div>
  );
}

// ✅ One timeline for both elements
function heroAnimation(container, textEl, imageEl, socialsEl,scrollRef) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });

  tl.from(imageEl, {
    y:-50,
    opacity: 0,
    duration: 2,
    ease: "power4.inOut",
  });

  tl.from(socialsEl, {
    y:+50,
    opacity: 0,
    duration: 2,
    ease: "power4.inOut",
  },"<");

  tl.from(scrollRef, {
    y:+50,
    opacity: 0,
    duration: 2,
    ease: "power4.inOut",
  },"<");
  
  tl.from(textEl, {
    y: -50,
    opacity: 0,
    duration: 2,
    ease: "power4.inOut",
  },'-=1.8');
}

export default App;
