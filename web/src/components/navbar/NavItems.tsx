import React from "react";
import HeroButton from "../buttons/HeroButton";
import externalLinks from "../../helpers/externalLinks";

interface IProps {
  style?: {animation: string};
}

const NavItems: React.FC<IProps> = (props: IProps) => {

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
        to={externalLinks.uberEats}
        color="white"
        children="UBEREATS"
        className="nav-button"
      />
      <HeroButton
        to={externalLinks.uberEats}
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