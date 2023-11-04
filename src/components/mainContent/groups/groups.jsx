import React from "react";
import style from "./groups.module.scss";
import { Navigate } from "react-router-dom";

const Groups = (props) => {
  // добавить контейнерную компоненту где реализовать логику редиректа
  if (props.isAuth === false) return <Navigate to={"/login"} />;
  return <div>it's a group page</div>;
};

export default Groups;
