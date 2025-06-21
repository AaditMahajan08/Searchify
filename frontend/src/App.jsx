import './App.css'
import './index.css'
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Implementation } from './components/Implementation';
import { Analysis } from './components/Analysis'
import { Information } from './components/Information'
import { Application } from './components/Application'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Implementation/>
      <Information/>
      <Analysis/>
      <Application/>
    </>
  );
}

export default App;