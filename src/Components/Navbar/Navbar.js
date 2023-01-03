import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>Logo</div>
      <div className={classes.items}>
        <ul>
          <li>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/connect"
            >
              Connect
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
