import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useFetchMenu } from "./helpers/useFetchMenu";
import { useFetchDrinksMenu } from "./helpers/useFetchDrinksMenu";

import NavBar from "./components/navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import MenuPage from "./pages/MenuPage";
import HappyHourPage from "./pages/HappyHourPage";
import TakeOutPage from "./pages/TakeOutPage";
import ErrorPage from "./pages/ErrorPage";
import { useFetchDiets } from "./helpers/useFetchDiets";

export const MenuContext = createContext({});

const App: React.FC = () => {
  const menu: any = useFetchMenu();
  const drinks: any = useFetchDrinksMenu();
  const diets: any = useFetchDiets();

  return (
    <BrowserRouter>
      <NavBar />

      <MenuContext.Provider value={{ menu, drinks, diets }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/happy-hour" element={<HappyHourPage />} />
          <Route path="/take-out" element={<TakeOutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MenuContext.Provider>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
