import { motion } from "framer-motion";

import via from "../../assets/partner-via.svg";
import complex from "../../assets/partner-complex.svg";
import dished from "../../assets/partner-dished.svg";
import narcity from "../../assets/partner-narcity.svg";
import ot from "../../assets/partner-ot.svg";

const HomepagePartners: React.FC = () => {
  return (
    <section className="homepage-partners" id="partners">
      <div className="wrapper">
        <motion.div
          className="homepage-partners_left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>As seen in:</p>

          <ul className="homepage-partners_left_companies">
            <li>
              <img src={via} alt="Vancouver Is Awesome" />
            </li>
            <li>
              <img src={complex} alt="Complex" />
            </li>
            <li>
              <img src={dished} alt="Dished" />
            </li>
            <li>
              <img src={narcity} alt="Narcity" />
            </li>
            <li>
              <img src={ot} alt="OpenTable Diners' Choice 2022" />
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="homepage-partners_right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            <strong>Modern</strong> takes on Vietnamese classics.
          </p>
          <p>
            <strong>Elevated</strong> nods to Asian street foods.
          </p>
          <p>
            <strong>Novel</strong> and <strong>experimental</strong>{" "}
            Asian-fusion dishes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomepagePartners;
