// import HomepageHero from "../components/homepage/HomepageHero";
// import HomepagePartners from "../components/homepage/HomepagePartners";
// import HomepageStory from "../components/homepage/HomepageStory";

// const Homepage: React.FC = () => {
  
//   return (
      
//     <div className="homepage">
      
//       <section className="homepage-section hero-section"><h1>hi</h1></section>
//       <section className="homepage-section partners-section"><HomepageHero/></section>
//       <section className="homepage-section story-section"><HomepageHero/></section>
//     </div>
//   );
// }

// export default Homepage;

import React, { useRef, useEffect } from "react";
import HomepageHero from "../components/homepage/HomepageHero";
import HomepagePartners from "../components/homepage/HomepagePartners";
import HomepageStory from "../components/homepage/HomepageStory";

const Homepage: React.FC = () => {
  // Create refs for the homepage sections
  const heroRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize the active section
    let activeSection = heroRef.current;

    // Update the active section and apply the appropriate classes as the user scrolls down the page
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;

      // Check if the partners section is the active section
      if (
        partnersRef.current &&
        scrollPosition >= partnersRef.current.offsetTop - window.innerHeight / 2
      ) {
        activeSection = partnersRef.current;
      }
      // Check if the story section is the active section
      if (
        storyRef.current &&
        scrollPosition >= storyRef.current.offsetTop - window.innerHeight / 2
      ) {
        activeSection = storyRef.current;
      }

      // Apply the appropriate classes to the active, previous, and next sections
      const sections = [heroRef.current, partnersRef.current, storyRef.current];
      sections.forEach((section) => {
        section.classList.remove("prev", "active", "next");
      });
      activeSection.classList.add("active");
      const prevSection =
        activeSection.previousElementSibling || sections[sections.length - 1];
      prevSection.classList.add("prev");
      const nextSection = activeSection.nextElementSibling || sections[0];
      nextSection.classList.add("next");
    });
  }, []);

  return (
    <div className="homepage">
      <section className="homepage-section hero-section active" ref={heroRef}>
        <HomepageHero />
      </section>
      <section
        className="homepage-section partners-section next"
        ref={partnersRef}
      >
        <HomepagePartners />
      </section>
      <section className="homepage-section story-section next" ref={storyRef}>
        <HomepageStory />
      </section>
    </div>
  );
};

export default Homepage;