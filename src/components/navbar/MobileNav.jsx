import React from "react";
import Link from "../Link";
import { AuthState } from "../../javascript/authState";
import "./MobileNav.css";
import "../../../Pivot Logo/Pivot Icon Removed Background.png";
import "../../../icons/house-floor-svgrepo-com.svg";
import "../../../icons/calendar-day-svgrepo-com.svg";
import "../../../icons/list-check-svgrepo-com.svg";
import "../../../icons/award-svgrepo-com.svg";

function IconGroup({ to, icon, text }) {
  return (
    <li className="nav-item p-1 m-0">
      <Link to={to}>
        <div className="nav-icon-container">
          <img className="nav-icon" src={icon} />
          <p className="nav-icon-text">{text}</p>
        </div>
      </Link>
    </li>
  );
}

function MobileNav({ userName, authState }) {
  return (
    <>
      <nav
        className="navbar navbar-expand bg-red-gradient fixed-bottom p-0"
        id="mobile-nav"
      >
        <div className="container justify-content-center">
          <ul className="navbar-nav">
            <IconGroup
              to="/"
              icon="/icons/house-floor-svgrepo-com.svg"
              text="Home"
            />
            <IconGroup
              to="/calendar"
              icon="/icons/calendar-day-svgrepo-com.svg"
              text="Calendar"
            />
            <IconGroup
              to="/projects"
              icon="/icons/list-check-svgrepo-com.svg"
              text="Projects"
            />
            <IconGroup
              to="/goals"
              icon="/icons/award-svgrepo-com.svg"
              text="Goals"
            />
            {authState === AuthState.Authenticated && (<IconGroup
              to="/settings"
              icon="/icons/user-alt-1-svgrepo-com.svg"
              text={userName}
            />)}
            {authState === AuthState.Unauthenticated && (<IconGroup
              to="/login"
              icon="/icons/user-alt-1-svgrepo-com.svg"
              text="Login"
            />)}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
