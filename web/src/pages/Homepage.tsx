import HomepageHero from "../components/homepage/HomepageHero";
import HomepagePartners from "../components/homepage/HomepagePartners";
import HomepageStory from "../components/homepage/HomepageStory";

const Homepage: React.FC = () => {
  
  return (
      
    <div className="homepage">
      
      <section className="homepage-section hero-section"><h1>hi</h1></section>
      <section className="homepage-section partners-section"><HomepageHero/></section>
      <section className="homepage-section story-section"><HomepageHero/></section>
    </div>
  );
}

export default Homepage;
