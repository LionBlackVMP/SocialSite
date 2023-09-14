import React from "react";
import style from "./navigation.module.scss";
import Dialogs from "../mainContent/dialogs/dialogs";
import Profile from "../mainContent/profile/profile";
import Footer from "./footer/footer";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={style.menu}>
      <div className="list">
        <div className={style.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? style.active : undefined)}
          >
            Profile
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) => (isActive ? style.active : undefined)}
          >
            Dialogs
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/groups"
            className={({ isActive }) => (isActive ? style.active : undefined)}
          >
            Groups
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? style.active : undefined)}
          >
            Users
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? style.active : undefined)}
          >
            Settings
          </NavLink>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </nav>
  );
};

export default Navbar;
