import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {

  const uberEatsLink = "https://www.ubereats.com/ca/store/district-eleven/LoDFiZK3WDayE9TBfCqlDQ?diningMode=DELIVERY";
  const reservationsLink = "https://www.exploretock.com/district-eleven-vancouver?tock_source=tock&tock_medium=city_page&tock_content=carousel-District%20Eleven";

  return (
    <div className="navbar">
      <h1>DISTRICTELEVEN</h1>
      <div className="logo">insert svg logo here</div>
      <div className="navbar-items">
        <Link to='/'>HOME</Link>
        <Link to='/menu'>MENU</Link>
        <Link to={uberEatsLink}>UBEREATS</Link>
        <Link to={reservationsLink}>RESERVATIONS</Link>
        <Link to="/">CONTACT US</Link>
      </div>
    </div>
  );
}

export default NavBar;