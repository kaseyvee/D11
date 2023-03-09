import React from "react";
import { Link } from "react-router-dom";

// does cody want to be able to change hours/contact?

const Footer: React.FC = () => {

  const instagramLink = "https://www.instagram.com/_districteleven/";
  const tikTokLink = "https://www.tiktok.com/@_districteleven";

  return (
    <div className="footer">
      <div className="foooter-top">
        <div className="footer-top-info">
          <div className="footer-top-info-item">
            <h1>HOURS</h1>
            <div>
              <p><strong>Fri & Sat:</strong> 5 pm - 2 pm</p>
              <p><strong>Tues, Wed, Thurs:</strong> 5 pm - 1 am</p>
              <p><strong>Sun:</strong> 5pm - 12am</p>
              <p><strong>Mon:</strong> Closed</p>
            </div>
          </div>
          <div className="footer-top-info-item">
            <h1>LOCATION</h1>
            <div>
              <p>4063 Main Street, Vancouver, BC</p>
            </div>
          </div>
          <div className="footer-top-info-item">
            <h1>CONTACT</h1>
            <div>
              <p>604.566.2021</p>
              <p>districteleven_@outlook.com</p>
            </div>
          </div>
        </div>
        <div className="google-map">
          google map goes here
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2021 District Eleven</div>
        <div>insert logo svg here</div>
        <div className="social-medias">
          <Link to={instagramLink}>Instagram</Link>
          <Link to={tikTokLink}>TikTok</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;