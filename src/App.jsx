import React, { useState } from 'react';
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import './App.scss';
function App() {
    const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="app">
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
