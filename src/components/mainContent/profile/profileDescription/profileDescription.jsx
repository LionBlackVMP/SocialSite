import React from "react";
import style from "./profileDescription.module.scss";
import Preloader from "../../../../common/preloader/Preloader";

const ProfileDescription = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {" "}
      <div>
        <img src={props.profile.photos.large} alt="" />
        main photo
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileDescription;
