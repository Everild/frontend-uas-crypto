import React from "react";
import { Menu } from "./page/Menu";
import Navbar from "./components/Navbar";
import {Routes, Route } from 'react-router-dom';
import Vga from "./components/Vga";
import Prosesor from "./components/Prosesor"
import Motherboard from "./components/Motherboard";
import ListMenu from "./page/ListMenu";
import Detail from "./page/Detail";

function App() {
  return (
    <div>
      {/* <Router> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<><Menu/> <ListMenu/></>} />
          <Route path="/Vga" element={<Vga/>} />
          <Route path="/Prosesor" element={<Prosesor/>} />
          <Route path="/Motherboard" element={<Motherboard/>} />
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
