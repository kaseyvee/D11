import { motion } from "framer-motion";

import externalLinks from "../helpers/externalLinks";

import HeroButton from "../components/HeroButton";

import error from "../assets/error.jpg";

const ErrorPage: React.FC = () => {
  return (
    <main className="homepage-hero">
      <div className="wrapper">
        <div className="homepage-hero_background">
          <motion.img
            src={error}
            alt="background"
            className="homepage-hero_background_img"
            initial={{ opacity: 0, filter: "blur(10px)"  }}
            whileInView={{ opacity: 1, filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{duration: 0.8}}
          />
        </div>

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
