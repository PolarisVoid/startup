import React from "react";
import Link from "./Link";
import "../../Pivot Logo/Pivot Icon Removed Background.png";
import "../../icons/house-floor-svgrepo-com.svg";
import "../../icons/calendar-day-svgrepo-com.svg";
import "../../icons/list-check-svgrepo-com.svg";
import "../../icons/award-svgrepo-com.svg";

function MobileNav() {
  return (
    <>
      <nav
        className="navbar navbar-expand bg-red-gradient fixed-bottom p-0"
        id="mobile-nav"
      >
        <div className="container justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item p-1">
              <Link to="/">
                <div className="nav-icon-container">
                  <img
                    className="nav-icon"
                    src="/icons/house-floor-svgrepo-com.svg"
                  />
                  <p className="nav-icon-text">Home</p>
                </div>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link to="/calendar">
                <div className="nav-icon-container">
                  <img
                    className="nav-icon"
                    src="/icons/calendar-day-svgrepo-com.svg"
                  />
                  <p className="nav-icon-text">Calendar</p>
                </div>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link to="/projects">
                <div className="nav-icon-container">
                  <img
                    className="nav-icon"
                    src="/icons/list-check-svgrepo-com.svg"
                  />
                  <p className="nav-icon-text">Projects</p>
                </div>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link to="/goals">
                <div className="nav-icon-container">
                  <img
                    className="nav-icon"
                    src="/icons/award-svgrepo-com.svg"
                  />
                  <p className="nav-icon-text">Goals</p>
                </div>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link to="/login">
                <div className="nav-icon-container">
                  <img
                    className="nav-icon"
                    src="/icons/user-alt-1-svgrepo-com.svg"
                  />
                  <p className="nav-icon-text">Login</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
