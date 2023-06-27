import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import MenuPage from './pages/MenuPage';

import NavBar from './components/navbar';
import Footer from './components/Footer';
import TakeOutPage from './pages/TakeOutPage';
import HappyHourPage from './pages/HappyHourPage';
import { useFetchMenu } from "./helpers/useFetchMenu";
import { useFetchDrinksMenu } from "./helpers/useFetchDrinksMenu";

export const MenuContext = createContext({});

const App: React.FC = () => {
  const [displayOverlay, setDisplayOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayOverlay(false);
    }, 1000)
  }, [])

  const menu: any = useFetchMenu();
  const drinks: any = useFetchDrinksMenu();

  return (
      <BrowserRouter>
          <NavBar />
          
          <MenuContext.Provider value={{menu, drinks}}>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/menu" element={<MenuPage/>}/>
              <Route path="/take-out" element={<TakeOutPage/>}/>
              <Route path="/happy-hour" element={<HappyHourPage/>}/>
            </Routes>
          </MenuContext.Provider>

          <Footer/>
          {displayOverlay && <div className='fade-overlay'></div>}
      </BrowserRouter>
  );
}

export default App;
