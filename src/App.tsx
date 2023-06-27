import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useFetchMenu } from "./helpers/useFetchMenu";
import { useFetchDrinksMenu } from "./helpers/useFetchDrinksMenu";
import { useFetchDiets } from "./helpers/useFetchDiets";
import { useFetchInfo } from "./helpers/useFetchInfo";

import Loading from "./components/Loading";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import MenuPage from "./pages/MenuPage";
import HappyHourPage from "./pages/HappyHourPage";
import TakeOutPage from "./pages/TakeOutPage";
import ErrorPage from "./pages/ErrorPage";

export const MenuContext = createContext({});

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  let menu: any = useFetchMenu();
  let drinks: any = useFetchDrinksMenu();
  let diets: any = useFetchDiets();
  let info: any = useFetchInfo();

  useEffect(() => {
    if (
      Object.keys(menu).length > 0 &&
      Object.keys(drinks).length > 0 &&
      Object.keys(diets).length > 0 &&
      Object.keys(info).length > 0
    ) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  });

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading ? (
          <Loading />
        ) : (
          <MenuContext.Provider value={{ menu, drinks, diets }}>
            <NavBar />

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/happy-hour" element={<HappyHourPage />} />
              <Route path="/take-out" element={<TakeOutPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>

            <Footer />
          </MenuContext.Provider>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
