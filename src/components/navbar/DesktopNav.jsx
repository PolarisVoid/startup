import React from "react";
import Link from "../Link";
import { AuthState } from "../../javascript/authState";

function DesktopNav({ userName, authState }) {
  return (
    <>
      <nav className="navbar navbar-expand bg-red-gradient" id="desktop-nav">
        <div className="container-fluid">
          <div className="container-left">
            <div className="justify-content-left">
              <img
                className="logo-icon nav-brand"
                alt="Logo"
                src="/Pivot Logo/Pivot Icon Removed Background.png"
              />
              <Link to="/">
                <h1 className="ps-2">Pivot</h1>
              </Link>
            </div>
            <ul className="ps-3 navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/calendar">Calendar</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/goals">Goals</Link>
              </li>
            </ul>
          </div>
          <div className="container-right">
            <ul className="navbar-nav">
              {authState !== AuthState.Authenticated && (<><li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup">Sign Up</Link>
              </li></>)}
              {authState === AuthState.Authenticated && (<li className="nav-item">
                <Link to="/settings">{userName}</Link>
              </li>)}
            </ul>
            {authState === AuthState.Authenticated && (<img
              className="logo-icon "
              alt="User Profile"
              src="/Pivot Logo/Pivot Icon Removed Background.png"
            />)}
          </div>
        </div>
      </nav>
    </>
  );
}

export default DesktopNav;
