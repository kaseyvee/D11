import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useFetchMenu } from "./helpers/useFetchMenu";
import { useFetchDrinksMenu } from "./helpers/useFetchDrinksMenu";

import Loading from "./components/Loading";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";

import Router from "./pages/router";
import useFetchData from "./helpers/useFetchData";

export const MenuContext = createContext({});

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const data = useFetchData();

  useEffect(() => {
    if (Object.keys(data).length > 0) {
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
          <MenuContext.Provider value={{ data }}>
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
