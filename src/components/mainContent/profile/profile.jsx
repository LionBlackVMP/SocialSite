import React from "react";
import style from "./profile.module.scss";
import MyPosts from "./myPosts/myPosts";
import ProfileDescription from "./profileDescription/profileDescription";

const Profile = (props) => {
  return (
    <div>
      <ProfileDescription />
      <MyPosts
        data={props.data}
        addPost={props.addPost}
        addTextToTextarea={props.addTextToTextarea}
      />
    </div>
  );
};

export default Profile;
