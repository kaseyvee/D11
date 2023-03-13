import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Homepage from "./pages/Homepage";

import "./styles/index.scss";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        {/* <Route path="/menu" element={<MenuPage/>}/> */}
      </Routes>

      {/* <NavBar/> */}
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
