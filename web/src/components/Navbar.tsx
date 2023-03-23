import React from "react";
import { Link } from "react-router-dom";
import HeroButton from "./buttons/HeroButton";

const NavBar: React.FC = () => {

  const uberEatsLink = "https://www.ubereats.com/ca/store/district-eleven/LoDFiZK3WDayE9TBfCqlDQ?diningMode=DELIVERY";
  const reservationsLink = "https://www.exploretock.com/district-eleven-vancouver?tock_source=tock&tock_medium=city_page&tock_content=carousel-District%20Eleven";

  return (
    <div className="navbar">
      <h1>DISTRICTELEVEN</h1>
      <img src="src/assets/logo.svg" alt="district eleven logo"/>
      <div className="navbar-items">
        <HeroButton
          to="/"
          color="white"
          children="HOME"
        />
        <HeroButton
          to="/menu"
          color="white"
          children="MENU"
        />
        <HeroButton
          to={uberEatsLink}
          color="white"
          children="UBEREATS"
        />
        <HeroButton
          to={reservationsLink}
          color="white"
          children="RESERVATIONS"
        />
        <HeroButton
          to="/"
          color="white"
          children="CONTACT US"
        />
      </div>
    </div>
  );
}

export default NavBar;