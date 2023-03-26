import React from "react";
import HeroButton from "../buttons/HeroButton";
import NavItems from "./NavItems";

const NavBar: React.FC = () => {

  const uberEatsLink = "https://www.ubereats.com/ca/store/district-eleven/LoDFiZK3WDayE9TBfCqlDQ?diningMode=DELIVERY";
  const reservationsLink = "https://www.exploretock.com/district-eleven-vancouver?tock_source=tock&tock_medium=city_page&tock_content=carousel-District%20Eleven";

  return (
    <div className="navbar">

      <div className="navbar_main">
        <div className="navbar_main_header">
          <span className="navbar_main_header_district">DISTRICT</span>
          <span className="navbar_main_header_eleven">ELEVEN</span>
        </div>

        <img
          src="src/assets/menu-open-button.svg"
          alt="open menu"
          className="navbar_main_menu-open"
        />
        
        <NavItems />
      </div>

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
          <NavItems />
        </div>
      </div>

    </div>
  );
}

export default NavBar;