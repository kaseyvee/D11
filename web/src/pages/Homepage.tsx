import HomepageHero from "../components/homepage/HomepageHero";
import HomepagePartners from "../components/homepage/HomepagePartners";
import HomepageStory from "../components/homepage/HomepageStory";

const Homepage: React.FC = () => {
  
  return (
      
    <div className="homepage">
      <HomepageHero/>
      <HomepagePartners/>
      <HomepageStory/>
    </div>
  );
}

export default Homepage;
