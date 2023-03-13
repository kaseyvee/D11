import HomepageHero from "../components/homepage/HomepageHero";
import HomepagePartners from "../components/homepage/HomepagePartners";
import HomepageStory from "../components/homepage/HomepageStory";

const Homepage: React.FC = () => {
  return (
    // first div always name of component unless nested (see SASS)

    // splitting the pages here because our Homepage route ("/") will load these and this page component will be handling the scroll effects (makes it easier for us)
    <div className="homepage">
      <HomepageHero/>
      <HomepagePartners/>
      <HomepageStory/>
    </div>
  );
}

export default Homepage;