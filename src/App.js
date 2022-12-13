import React from "react";
import { Menu } from "./page/Menu";
import Navbar from "./components/Navbar";
import {Routes, Route } from 'react-router-dom';
import Vga1 from "./page/vga/vga1";
import Vga2 from "./page/vga/vga2";
import Vga3 from "./page/vga/vga3";
import Prosesor1 from "./page/prosesor/prosesor1"
import Prosesor2 from "./page/prosesor/prosesor2"
import Prosesor3 from "./page/prosesor/prosesor3"
import Motherboard1 from "./page/motherboard/motherboard1";
import Motherboard2 from "./page/motherboard/motherboard2";
import Motherboard3 from "./page/motherboard/motherboard3";
import ListMenu from "./page/ListMenu";
import Detail from "./page/Detail";

function App() {
  return (
    <div>
      {/* <Router> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<><Menu/> <ListMenu/></>} />
          <Route path="/Vga" element={<><Vga1/><Vga2/><Vga3/></>} />
          <Route path="/Prosesor" element={<><Prosesor1/><Prosesor2/><Prosesor3/></>} />
          <Route path="/Motherboard" element={<><Motherboard1/><Motherboard2/><Motherboard3/></>} />
          <Route path="/menu/:id" element={<Detail />} />
        </Routes>

        {/* <Menu/>
        <Vga/>
        <Prosesor/>
        <Motherboard/> */}


        {/* <Routes>
          <Route path='/' element={<Beranda />} />
        </Routes> */}

      {/* </Router> */}
    </div>
  );
}

export default App;
