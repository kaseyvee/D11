import HeroButton from "./buttons/HeroButton";

const PageHeader: React.FC = () => {
  return (
    <div className="page-header">
      <h1 className="page-header_name">MENU</h1>
      <div className="page-header_buttons">
        <HeroButton
          to="/"
          color="white"
          children="HAPPY HOUR MENU"
          className="page-header-button"
          />
        <HeroButton
          to="/"
          color="white"
          children="TAKE-OUT MENU"
          className="page-header-button"
        />
      </div>
      <div className="page-header_menu-sections">
        <HeroButton
          to="/"
          color="white"
          children="ADVENTUROUS"
          className="page-header_menu-sections-button"
        />
        <HeroButton
          to="/"
          color="white"
          children="AUTHENTIC"
          className="page-header_menu-sections-button"
        />
        <HeroButton
          to="/"
          color="white"
          children="DESSERTS"
          className="page-header_menu-sections-button"
        />
        <HeroButton
          to="/"
          color="white"
          children="DRINKS"
          className="page-header_menu-sections-button"
        />
      </div>
    </div>
  );
}

export default PageHeader;