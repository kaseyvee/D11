import React from "react";
import { Link } from "react-router-dom";

// does cody want to be able to change hours/contact?

const Footer: React.FC = () => {

  return (
    <div className="footer">
      <div className="foooter-top">
        <div className="footer-top-info">
          <div>
            <h1>HOURS</h1>
            <div></div>
          </div>
          <div>
            <h1>LOCATION</h1>
            <div></div>
          </div>
          <div>
            <h1>CONTACT</h1>
            <div></div>
          </div>
        </div>
        <div className="google-map">
        </div>
      </div>
      <div className="footer-bottom">

      </div>
    </div>
  );
}

export default Footer;