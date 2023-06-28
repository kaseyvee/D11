import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useFetchMenu } from "./helpers/useFetchMenu";
import { useFetchDrinksMenu } from "./helpers/useFetchDrinksMenu";

import Loading from "./components/Loading";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";

import Router from "./pages/router";

export const MenuContext = createContext({});

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  let menu: any = useFetchMenu();
  let drinks: any = useFetchDrinksMenu();
  // let info: any = useFetchInfo();

  useEffect(() => {
    if (
      Object.keys(menu).length > 0 &&
      Object.keys(drinks).length > 0
      // && Object.keys(info).length > 0
    ) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  });

  return (
    <BrowserRouter basename="/D11">
      <AnimatePresence>
        {loading ? (
          <Loading />
        ) : (
          <MenuContext.Provider value={{ menu, drinks }}>
            <NavBar />

            <Router />

            <Footer />
          </MenuContext.Provider>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
