import React from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";


function Navbar() {
  return (
    <>
      <header className="navbar-container">
        <DesktopNav />
        <MobileNav />
      </header>
    </>
  );
}

export default Navbar;
