import HomepageHero from "../components/homepage/HomepageHero";
import HomepagePartners from "../components/homepage/HomepagePartners";
import HomepageStory from "../components/homepage/HomepageStory";

const Homepage: React.FC = () => {
   /**
     * when querying contentful the most recent release is at index 0 so everything will automatically be pushed down
      https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/content-type/query-entries/console  
    */

  
  return (

      
    <div className="homepage">
      <HomepageHero/>
      {/* <HomepagePartners/> */}
      {/* <HomepageStory/> */}
    </div>
  );
}

export default Homepage;