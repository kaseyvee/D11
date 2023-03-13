const HomepageHero: React.FC = () => {
  return (
    <section className="home-hero">


      <div className="home-hero_background">
        <img 
          className="home-hero_background_image"
          alt="d11-food"
          src="background.jpg"
        />
      </div>
      <div>
        <div>late night yumyuymyumn</div>

        <div className="buttons-container">
          menu and book a table buttons go here
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
