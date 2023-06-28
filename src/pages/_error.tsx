import { useEffect } from "react";
import { motion } from "framer-motion";

import externalLinks from "../helpers/externalLinks";

import HeroButton from "../components/HeroButton";

const ErrorPage: React.FC = () => {
  useEffect(() => {
    document.title = "Uh oh! 404 | District Eleven";
  }, []);

  return (
    <main className="error-page">
      <div className="wrapper">
        <motion.div
          className="homepage-hero_content"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      </div>
    </main>
  );
};

export default ErrorPage;
