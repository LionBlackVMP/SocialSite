import React from "react";
import logo from "../../assets/img/logo.svg";
import style from "./header.module.scss";
const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="logo" />
        COMPANY
      </a>
    </header>
  );
};

export default Header;
