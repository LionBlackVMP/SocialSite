import React from "react";
import style from "./profile.module.scss";
import ProfileDescription from "./profileDescription/profileDescription";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileDescription profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
