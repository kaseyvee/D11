import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const LandingPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <section className="landing">
        <div>
          <div>
            late night yumyuymyumn
          </div>
          <div className="buttons-container">
            menu and book a table buttons go here
          </div>
        </div>
      </section>
      <section className="blurb">
        <div className="blurb-left">
          <p>As seen in:</p>
          <div>
            insert blog svgs here
          </div>
        </div>
        <div className="blurb-right">
          <p><strong>Modern</strong> takes on Vietnamese classics.</p>
          <p><strong>Elevated</strong> nods to Asian street foods.</p>
          <p><strong>Novel</strong> and <strong>experimental</strong> Asian-fusion dishes.</p>
        </div>
      </section>
      <section className="about">
        <p>
          From the ashes of New Westminster’s Pho Pho You restaurant comes <span><strong>District Eleven</strong></span>. A new concept restaurant run by cooks for those passionate about food.
        </p>
        <p>
          With an emphasis on bold flavours, honouring Owner and Chef Phi Le’s Vietnamese heritage, as well as his interest in Japanese and other East Asian cuisines, District Eleven offers dishes both <strong>familiar</strong> and <strong>fresh</strong>.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;