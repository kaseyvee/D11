const HomepagePartners: React.FC = () => {
  return (
    <section className="homepage-partners" id="partners">
      <div className="wrapper">
        <div className="homepage-partners_left">
          <p>As seen in:</p>

          <div className="homepage-partners_left_companies">
            <img src="partner-via.svg" />
            <img src="partner-complex.svg" />
            <img src="partner-dished.svg" />
            <img src="partner-narcity.svg" />
            <img src="partner-ot.svg" />
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
