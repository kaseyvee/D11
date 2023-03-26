import React from "react";
import HeroButton from "./buttons/HeroButton";

const NavBar: React.FC = () => {

  const uberEatsLink = "https://www.ubereats.com/ca/store/district-eleven/LoDFiZK3WDayE9TBfCqlDQ?diningMode=DELIVERY";
  const reservationsLink = "https://www.exploretock.com/district-eleven-vancouver?tock_source=tock&tock_medium=city_page&tock_content=carousel-District%20Eleven";

  return (
    <div className="navbar">
      <h1 className="navbar_header">DISTRICTELEVEN</h1>
      <div className="navbar_overlay">
        <img
          src="src/assets/menu-close-button.svg"
          alt="exit menu"
          className="navbar_overlay_menu-close"
        />
        <div className="navbar_overlay_items">
          <img
            src="src/assets/logo.svg"
            alt="district eleven logo"
            className="navbar_overlay_items_logo"
          />
          <HeroButton
            to="/"
            color="white"
            children="HOME"
            className="nav-button"
          />
          <HeroButton
            to="/menu"
            color="white"
            children="MENU"
            className="nav-button"
          />
          <HeroButton
            to={uberEatsLink}
            color="white"
            children="UBEREATS"
            className="nav-button"
          />
          <HeroButton
            to={reservationsLink}
            color="white"
            children="RESERVATIONS"
            className="nav-button"
          />
          <HeroButton
            to="/"
            color="white"
            children="CONTACT US"
            className="nav-button"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;