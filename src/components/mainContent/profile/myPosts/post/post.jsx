import React from "react";
import style from "./post.module.scss";
import avatar from "../../../../../assets/img/logo.svg";

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img src={avatar} alt="" />
        {props.message}
        <div>like {props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
