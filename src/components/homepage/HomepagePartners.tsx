import via from "../../assets/partner-via.svg";
import complex from "../../assets/partner-complex.svg";
import dished from "../../assets/partner-dished.svg";
import narcity from "../../assets/partner-narcity.svg";
import ot from "../../assets/partner-ot.svg";

const HomepagePartners: React.FC = () => {
  return (
    <section className="homepage-partners" id="partners">
      <div className="wrapper">
        <div className="homepage-partners_left">
          <p>As seen in:</p>

          <div className="homepage-partners_left_companies">
            <li>
              <img src={via} alt="Vancouver Is Awesome" />
            </li>
            <img src={complex} alt="Complex" />
            <img src={dished} alt="Dished" />
            <img src={narcity} alt="Narcity" />
            <img src={ot} alt="OpenTable Diners' Choice 2022" />
          </div>
        </div>

        <div className="homepage-partners_right">
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
        </div>
      </div>
    </section>
  );
};

export default HomepagePartners;
