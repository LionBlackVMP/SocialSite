import React from "react";
import logo from "../../assets/img/logo.svg";
import style from "./header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="logo" />
        COMPANY
      </a>
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
