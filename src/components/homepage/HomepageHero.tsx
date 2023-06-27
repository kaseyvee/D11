import { motion } from "framer-motion";
import externalLinks from "../../helpers/externalLinks";
import HeroButton from "../HeroButton";
import background from "../../assets/background.jpg";

const HomepageHero: React.FC = () => {
  return (
    <section className="homepage-hero">
      <div className="homepage-hero_background">
        <img
          src={background}
          alt="background"
          className="homepage-hero_background_img"
        />
      </div>

      <div className="wrapper">
        <motion.div
          className="homepage-hero_content"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8}}
        >
          <h1 className="homepage-hero_content_words">
            <span className="homepage-hero_content_words_header">
              Late night.
            </span>
            <span className="homepage-hero_content_words_header">
              Asian-fusion.
            </span>
            <span className="homepage-hero_content_words_header">
              Snack bar.
            </span>

            <span className="homepage-hero_content_words_greeting">
              Mot Hai Ba, Dzo!
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
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageHero;
