import HomepageHero from "../components/homepage/HomepageHero";
import HomepagePartners from "../components/homepage/HomepagePartners";
import HomepageStory from "../components/homepage/HomepageStory";
import useScrollToTop from "../helpers/useScrollToTop";

const Homepage: React.FC = () => {
  useScrollToTop();

  return (
    <main className="homepage page">
      <HomepageHero />
      <HomepagePartners />
      <HomepageStory />
    </main>
  );
};

export default Homepage;
