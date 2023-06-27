import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import MenuPage from './pages/MenuPage';

import NavBar from './components/navbar';
import Footer from './components/Footer';
import TakeOutPage from './pages/TakeOutPage';
import HappyHourPage from './pages/HappyHourPage';

const App: React.FC = () => {
  const [displayOverlay, setDisplayOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayOverlay(false);
    }, 1000)
  }, [])

  return (
      <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/menu" element={<MenuPage/>}/>
            <Route path="/take-out" element={<TakeOutPage/>}/>
            <Route path="/happy-hour" element={<HappyHourPage/>}/>
          </Routes>

          <Footer/>
          {displayOverlay && <div className='fade-overlay'></div>}
      </BrowserRouter>
  );
}

export default App;
