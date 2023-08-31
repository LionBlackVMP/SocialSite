import React from "react";
import style from "./profile.module.scss";
import MyPosts from "./myPosts/myPosts";
import ProfileDescription from "./profileDescription/profileDescription";

const Profile = () => {
  return (
    <div>
      <ProfileDescription />
      <MyPosts />
    </div>
  );
};

export default Profile;
