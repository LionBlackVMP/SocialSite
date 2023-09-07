import React from "react";
import style from "./profile.module.scss";
import MyPosts from "./myPosts/myPosts";
import ProfileDescription from "./profileDescription/profileDescription";

const Profile = (props) => {
  return (
    <div>
      <ProfileDescription />
      <MyPosts state={props.state} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
