import React from "react";
import {
  addPostCreator,
  addTextToPublicationsCreator,
} from "../../../redux/reducer/profileReducer";
import MyPosts from "./myPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };
  let onPostChange = (text) => {
    props.store.dispatch(addTextToPublicationsCreator(text));
  };
  return (
    <MyPosts
      addTextToPublications={onPostChange}
      addPost={addPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
