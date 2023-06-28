import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import NavItems from "./NavItems";

import logo from "../../assets/logo.svg";
import open from "../../assets/menu-open-button.svg";
import close from "../../assets/menu-close-button.svg";

const NavBar: React.FC = () => {
  const scrollUpStyle = {
    animation: "scrollUp 500ms ease-in-out forwards",
    backgroundColor: "#1E1E1E",
  };
  const scrollDownStyle = {
    animation: "scrollDown 500ms ease-in-out forwards",
  };

  const [scrollStyle, setScrollStyle] = useState<any>(scrollDownStyle);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    addEventListener("resize", () => {
      setDisplay(false);
    });

    return () => {
      removeEventListener("resize", () => {
        setDisplay(false);
      });
    };
  }, []);

  function handleMenuToggle() {
    if (display) {
      return setDisplay(false);
    }
    return setDisplay(true);
  }

  function handleScrollEffect() {
    const position = window.scrollY;
    if (position > 200) {
      return setScrollStyle(scrollUpStyle);
    }
    return setScrollStyle(scrollDownStyle);
  }

  document.addEventListener("scroll", handleScrollEffect);

  return (
    <nav className="navbar" style={!display ? scrollStyle : {}}>
      <button
        onClick={handleMenuToggle}
        className={`navbar_menu-${display ? "close" : "open"}`}
        aria-expanded={display ? "true" : "false"}
        aria-label="mobile menu navigation"
      >
        <img src={display ? close : open} alt="" />
      </button>

      <div className="navbar_main">
        <header className="navbar_main_header">
          <span className="navbar_main_header_district">DISTRICT</span>
          <span className="navbar_main_header_eleven">ELEVEN</span>
        </header>
        <NavItems />
      </div>
      <AnimatePresence>
        {display && (
          <motion.div
            className="navbar_overlay"
            initial={{ opacity: 0, y: 72 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -72 }}
          >
            <div className="navbar_overlay_items">
              <img
                src={logo}
                alt="district eleven logo"
                className="navbar_overlay_items_logo"
                width={62}
                height={62}
              />
              <NavItems onClick={() => setDisplay(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
