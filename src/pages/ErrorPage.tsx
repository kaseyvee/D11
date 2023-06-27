import HeroButton from "../components/HeroButton";
import externalLinks from "../helpers/externalLinks";

const ErrorPage: React.FC = () => {
  return (
    <main className="homepage-hero">
      <div className="wrapper">
        <div className="homepage-hero_content">
          <h1 className="homepage-hero_content_words">
            <span className="homepage-hero_content_words_header">Giời ơi!</span>
            <span className="homepage-hero_content_words_header">
              We couldn't find that. :(
            </span>

            <span className="homepage-hero_content_words_greeting">
              Maybe you meant...
            </span>
          </h1>

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
