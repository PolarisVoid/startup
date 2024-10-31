import React from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function Navbar({ userName, authState }) {
  return (
    <>
      <header className="navbar-container">
        <DesktopNav userName={userName} authState={authState} />
        <MobileNav userName={userName} authState={authState} />
      </header>
    </>
  );
}

export default Navbar;
