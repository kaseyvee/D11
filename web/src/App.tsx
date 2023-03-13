import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";

import "./styles/index.scss";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        {/* <Route path="/menu" element={<MenuPage/>}/> */}
      </Routes>

      <NavBar/>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
