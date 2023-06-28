import externalLinks from "../helpers/externalLinks";
import HeroButton from "./HeroButton";
import Logo from "../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="wrapper">
        <div className="footer_top">
          <div className="footer_top_info">
            <div className="footer_top_info_item">
              <header className="footer_top_info_item_header">HOURS</header>
              <div className="footer_top_info_item_content">
                <p>
                  <strong>Mon:</strong> Closed
                </p>
                <p>
                  <strong>Tues - Thurs:</strong> 5 pm - 1 am
                </p>
                <p>
                  <strong>Fri:</strong> 5 pm - 2 am
                </p>
                <p>
                  <strong>Sat:</strong> 11am - 3pm, 5 pm - 2 am
                </p>
                <p>
                  <strong>Sun:</strong> 11am - 3pm, 5pm - 12am
                </p>
              </div>
            </div>
            <div className="footer_top_info_item">
              <header className="footer_top_info_item_header">LOCATION</header>
              <div className="footer_top_info_item_content">
                <p>4063 Main Street, Vancouver, BC</p>
              </div>
            </div>
            <div className="footer_top_info_item">
              <header className="footer_top_info_item_header">CONTACT</header>
              <div className="footer_top_info_item_content">
                <a href="tel:6045662021" aria-label="6 0 4. 5 6 6. 2 0 2 1.">
                  604.566.2021
                </a>
                <a href="mailto: districteleven_@outlook.com">
                  districteleven_@outlook.com
                </a>
              </div>
            </div>
          </div>

          <img
            src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+d3af37(-123.10140314000238,49.249254171474)/-123.1015,49.2493,12.98,0/1000x1000@2x?access_token=pk.eyJ1Ijoia2FzZXl2ZWUiLCJhIjoiY2xmdWRhdDR4MDF3MzNobzgyMnRjMmtsMyJ9.fKYQPJBIZ_aO7UNqll1q4A"
            alt=""
            className="footer_top_map"
          />
        </div>

        <div className="footer_bottom">
          <div>© 2021 District Eleven</div>
          <img
            src={Logo}
            alt=""
            className="footer_bottom_logo"
            width={62}
            height={62}
          />
          <div className="footer_bottom_socials">
            <HeroButton
              to={externalLinks.instagram}
              color="yellow"
              children="Instagram"
              className="footer-button"
            />
            <HeroButton
              to={externalLinks.tikTok}
              color="yellow"
              children="Tiktok"
              className="footer-button"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
