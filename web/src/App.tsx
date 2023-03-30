import * as contentful from 'contentful';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from './components/navbar';
import Footer from './components/Footer';

const App: React.FC = () => {


  const client = contentful.createClient({
    space: 'juzkia2ppex9',
    accessToken: 'yma-kCPzR_Pd8X6Bv_ZHECeETLG3X4UyCHi3LeTxFAI'
  })
  
  // https://cdn.contentful.com/spaces/juzkia2ppex9/environments/master/entries/6jduzSGEo20EcVtZ7NU6qa?access_token=
  client.getEntry('6jduzSGEo20EcVtZ7NU6qa')
    .then((entry) => console.log(entry))
    .catch(console.error)
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            {/* <Route path="/menu" element={<MenuPage/>}/> */}
          </Routes>

          <NavBar />
          <Footer/>
          <div className='fade-overlay'></div>
      </BrowserRouter>
  );
}

export default App;
