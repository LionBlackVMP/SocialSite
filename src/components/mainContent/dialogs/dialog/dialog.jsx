import React from "react";
import { NavLink } from "react-router-dom";
import style from "./dialog.module.scss";
const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.profile}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? style.active : undefined)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
