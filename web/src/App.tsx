
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import {useContentful} from "react-contentful";

// space: 'juzkia2ppex9',
// accessToken: 'yma-kCPzR_Pd8X6Bv_ZHECeETLG3X4UyCHi3LeTxFAI',



// const {data, fetched} = useContentful({
//   contentType: 'blogPost',
//   query: {
//       "order": "-sys.createdAt",
//   },
// });





const App: React.FC = () => {

  return (
    <React.Fragment>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              {/* <Route path="/menu" element={<MenuPage/>}/> */}
            </Routes>

            {/* <NavBar/> */}
            {/* <Footer/> */}
          </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
