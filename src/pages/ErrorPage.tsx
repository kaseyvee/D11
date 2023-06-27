import HeroButton from "../components/buttons/HeroButton";
import externalLinks from "../helpers/externalLinks";

const ErrorPage: React.FC = () => {
  return (
    <main className="homepage-hero">
      <div className="wrapper">
        <div className="homepage-hero_content">
          <div className="homepage-hero_content_words">
            <p className="homepage-hero_content_words_header">
              Giời ơi!
            </p>
            <p className="homepage-hero_content_words_header">
              We couldn't find that. :(
            </p>

            <span className="homepage-hero_content_words_greeting">
              Maybe you meant...
            </span>
          </div>

          <div className="homepage-hero_content_buttons">
            <HeroButton to="/menu" color="white" children="MENU" />
            <HeroButton
              to={externalLinks.reservations}
              color="white"
              children="BOOK A TABLE"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
