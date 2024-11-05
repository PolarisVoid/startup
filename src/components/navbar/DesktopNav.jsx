import React from "react";
import Link from "../Link";
import "./DesktopNav.css";
import { AuthState } from "../../javascript/authState";

function DesktopNav({ userName, authState }) {
  return (
    <>
      <nav
        id="desktop-nav"
        className="navbar container-fluid bg-red-gradient h-100"
      >
        <div className="container-basic">
          <div className="h-100 container-basic">
            <div className="logo-container margin-right">
              <img
                className="logo-icon margin-right"
                alt="Logo"
                src="/public/assets/logos/pivot_logo_transparent.svg"
              />
              <Link to="/">
                <h1 className="m-2">Pivot</h1>
              </Link>
            </div>
            <ul className="nav-items-list">
              <li className="nav-item h-100">
                <Link to="/">
                  <h5 className="m-2">Home</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/calendar">
                  <h5 className="m-2">Calendar</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">
                  <h5 className="m-2">Projects</h5>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/goals"><h5 className="m-2">Goals</h5></Link>
              </li> */}
            </ul>
          </div>
          <div className="h-100 container-basic">
            <ul className="nav-items-list">
              {authState === AuthState.Unauthenticated && (
                <>
                  <li className="nav-item">
                    <Link to="/login">
                      <h5 className="m-2">Login</h5>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup">
                      <h5 className="m-2">Sign Up</h5>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="profile-image-container container-basic">
              {authState === AuthState.Authenticated && (
                <Link to="/settings">
                  <h5 className="m-2">{userName}</h5>
                </Link>
              )}
              {authState === AuthState.Authenticated && (
                <div>
                  <img
                    className="logo-icon margin-right"
                    alt="Logo"
                    src="/public/assets/icons/user-alt-1.svg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DesktopNav;
