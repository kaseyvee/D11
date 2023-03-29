import React, { useState } from "react";
import HeroButton from "../buttons/HeroButton";
import NavItems from "./NavItems";

const NavBar: React.FC = () => {

  const uberEatsLink = "https://www.ubereats.com/ca/store/district-eleven/LoDFiZK3WDayE9TBfCqlDQ?diningMode=DELIVERY";
  const reservationsLink = "https://www.exploretock.com/district-eleven-vancouver?tock_source=tock&tock_medium=city_page&tock_content=carousel-District%20Eleven";

  const [display, setDisplay] = useState(false)

  function handleMenuToggle() {
    if (display) {
      return setDisplay(false);
    }
    return setDisplay(true);
  }
  
  const scrollUpStyle = {
    animation: "scrollUp 500ms ease-in-out forwards"
  };
  const scrollDownStyle = {
    animation: "scrollDown 500ms ease-in-out forwards"
  };

  const [scrollStyle, setScrollStyle] = useState(scrollDownStyle);

  function handleScrollEffect() {
    const position = window.scrollY;
    if (position > 500) {
      return setScrollStyle(scrollUpStyle);
    }
    return setScrollStyle(scrollDownStyle);
  }

  document.addEventListener("scroll", handleScrollEffect);

  return (
    <div className="navbar">
      {display ?
        <img
          src="src/assets/menu-close-button.svg"
          alt="exit menu"
          className="navbar_menu-close"
          onClick={handleMenuToggle}
        />
        :
        <img
          src="src/assets/menu-open-button.svg"
          alt="open menu"
          className="navbar_menu-open"
          onClick={handleMenuToggle}
        />
      }

      <div className="navbar_main">
        <div className="navbar_main_header" style={scrollStyle}>
          <span className="navbar_main_header_district">DISTRICT</span>
          <span className="navbar_main_header_eleven">ELEVEN</span>
        </div>
        <NavItems style={scrollStyle} />
      </div>

      {display && <div className="navbar_overlay">
        <div className="navbar_overlay_items">
          <img
            src="src/assets/logo.svg"
            alt="district eleven logo"
            className="navbar_overlay_items_logo"
          />
          <NavItems />
        </div>
      </div>}
    </div>
  );
}

export default NavBar;