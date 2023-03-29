import React from "react";
import HeroButton from "../buttons/HeroButton";

const NavItems: React.FC = (props: any) => {

  const uberEatsLink = "https://www.ubereats.com/ca/store/district-eleven/LoDFiZK3WDayE9TBfCqlDQ?diningMode=DELIVERY";
  const reservationsLink = "https://www.exploretock.com/district-eleven-vancouver?tock_source=tock&tock_medium=city_page&tock_content=carousel-District%20Eleven";

  return (
    <div className="nav-items" style={props.style}>
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
  )
}

export default NavItems;