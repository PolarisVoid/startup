import React from "react";
import { NavLink } from "react-router-dom";
import "./Link.css";

function Link({ to, children }) {
    return <NavLink className="golden-link" to={to}>{children}</NavLink>;
  }

export default Link;