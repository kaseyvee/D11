import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";

const NavBar: React.FC = () => {

  const [display, setDisplay] = useState(false)

  function handleMenuToggle() {
    if (display) {
      return setDisplay(false);
    }
    return setDisplay(true);
  }
  
  const scrollUpStyle = {
    animation: "scrollUp 500ms ease-in-out forwards",
    backgroundColor: "#1E1E1E"
  };
  const scrollDownStyle = {
    animation: "scrollDown 500ms ease-in-out forwards",
  };

  const [scrollStyle, setScrollStyle] = useState<any>(scrollDownStyle);

  function handleScrollEffect() {
    const position = window.scrollY;
    if (position > 200) {
      return setScrollStyle(scrollUpStyle);
    }
    return setScrollStyle(scrollDownStyle);
  }

  document.addEventListener("scroll", handleScrollEffect);

  return (
    <nav className="navbar" style={scrollStyle}>
      {display ?
        <img
          src="menu-close-button.svg"
          alt="exit menu"
          className="navbar_menu-close"
          onClick={handleMenuToggle}
        />
        :
        <img
          src="menu-open-button.svg"
          alt="open menu"
          className="navbar_menu-open"
          onClick={handleMenuToggle}
        />
      }

      <div className="navbar_main">
        <h1 className="navbar_main_header">
          <span className="navbar_main_header_district">DISTRICT</span>
          <span className="navbar_main_header_eleven">ELEVEN</span>
        </h1>
        <NavItems />
      </div>

      {display && <div className="navbar_overlay">
        <div className="navbar_overlay_items">
          <img
            src="logo.svg"
            alt="district eleven logo"
            className="navbar_overlay_items_logo"
          />
          <NavItems onClick={() => setDisplay(false)} />
        </div>
      </div>}
    </nav>
  );
}

export default NavBar;