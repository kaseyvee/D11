import externalLinks from "../../helpers/externalLinks";
import HeroButton from "../buttons/HeroButton";

const HomepageHero: React.FC = () => {
  return (
    <section className="homepage-hero">
      <div className="homepage-hero_background">
        <img 
          src="background.jpg"
          alt="background"
          className="homepage-hero_background_img"
        />
      </div>

      <div className="wrapper">
        <div className="homepage-hero_content">
          <div className="homepage-hero_content_words">
              <p className="homepage-hero_content_words_header">Late night.</p>
              <p className="homepage-hero_content_words_header">Asian-fusion.</p>
              <p className="homepage-hero_content_words_header">Snack bar.</p>

              <span className="homepage-hero_content_words_greeting">Mot Hai Ba, Dzo!</span>
          </div>

          <div className="homepage-hero_content_buttons">
            <HeroButton
              to="/menu"
              color="white"
              children="MENU"
            />
            <HeroButton
              to={externalLinks.reservations}
              color="white"
              children="BOOK A TABLE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
