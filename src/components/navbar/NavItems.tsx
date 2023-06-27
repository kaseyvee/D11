import React from "react";
import HeroButton from "../buttons/HeroButton";
import externalLinks from "../../helpers/externalLinks";

interface IProps {
  style?: {animation: string};
  onClick?: () => void;
}

const NavItems: React.FC<IProps> = (props: IProps) => {

  return (
    <ul className="nav-items" style={props.style} onClick={props.onClick}>
      <li>  
        <HeroButton
          to="/"
          color="white"
          children="HOME"
          className="nav-button"
        />
      </li>
      <li>  
        <HeroButton
          to="/menu"
          color="white"
          children="MENU"
          className="nav-button"
        />
      </li>
      <li>  
        <HeroButton
          to={externalLinks.uberEats}
          color="white"
          children="UBEREATS"
          className="nav-button"
        />
      </li>
      <li>  
        <HeroButton
          to={externalLinks.reservations}
          color="white"
          children="RESERVATIONS"
          className="nav-button"
        />
      </li>
      <li>  
        <HeroButton
          href="/#footer"
          color="white"
          children="CONTACT US"
          className="nav-button"
        />
      </li>
    </ul>
  )
}

export default NavItems;