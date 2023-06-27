import via from "../../assets/partner-via.svg"
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
            <img src={via} />
            <img src={complex} />
            <img src={dished} />
            <img src={narcity} />
            <img src={ot} />
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
            <strong>Novel</strong> and <strong>experimental</strong> Asian-fusion
            dishes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepagePartners;
