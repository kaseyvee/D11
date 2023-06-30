import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Router from "./pages/router";
import useFetchData from "./helpers/useFetchData";

import Loading from "./components/Loading";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";

export const DataContext = createContext({});

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
          <DataContext.Provider value={{ data }}>
            <NavBar />

            <Router />

            <Footer />
          </DataContext.Provider>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
