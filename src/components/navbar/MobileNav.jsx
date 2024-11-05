import React from "react";
import Link from "../Link";
import { AuthState } from "../../javascript/authState";
import "./MobileNav.css";

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
        className="navbar container-fluid bg-red-gradient fixed-bottom p-0 navbar-container-mobile"
        id="mobile-nav"
      >
        <div className="container-basic justify-content-center">
          <ul className="nav-items-list">
            <IconGroup
              to="/"
              icon="/public/assets/icons/house-floor.svg"
              text="Home"
            />
            <IconGroup
              to="/calendar"
              icon="/public/assets/icons/calendar-day.svg"
              text="Calendar"
            />
            <IconGroup
              to="/projects"
              icon="/public/assets/icons/list-check.svg"
              text="Projects"
            />
            {/* <IconGroup
              to="/goals"
              icon="/icons/award.svg"
              text="Goals"
            /> */}
            {authState === AuthState.Authenticated && (<IconGroup
              to="/settings"
              icon="/public/assets/icons/user-alt-1.svg"
              text={userName}
            />)}
            {authState === AuthState.Unauthenticated && (<IconGroup
              to="/login"
              icon="/public/assets/icons/user-alt-1.svg"
              text="Login"
            />)}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
