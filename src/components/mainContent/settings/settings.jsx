import React from "react";
import style from "./settings.module.scss";
import { Navigate } from "react-router-dom";

const Settings = (props) => {
  // добавить контейнерную компоненту где реализовать логику редиректа
  if (props.isAuth === false) return <Navigate to={"/login"} />;
  return <div>it's a settings page</div>;
};

export default Settings;
