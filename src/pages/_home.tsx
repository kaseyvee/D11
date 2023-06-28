import { useEffect } from "react";

import useScrollToTop from "../helpers/useScrollToTop";

import HomepageHero from "../components/homepage/HomepageHero";
import HomepagePartners from "../components/homepage/HomepagePartners";
import HomepageStory from "../components/homepage/HomepageStory";

const Homepage: React.FC = () => {
  useScrollToTop();

  useEffect(() => {
    document.title = "District Eleven";
  }, []);

  return (
    <main className="homepage page">
      <HomepageHero />
      <HomepagePartners />
      <HomepageStory />
    </main>
  );
};

export default Homepage;
