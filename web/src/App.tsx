import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import SamplePage2 from "./pages/SamplePage2";


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/2" element={<SamplePage2/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
