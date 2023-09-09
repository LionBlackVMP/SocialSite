import React from "react";
import {
  addPostCreator,
  addTextToPublicationsCreator,
} from "../../../redux/reducer/profileReducer";
import MyPosts from "./myPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    onPostChange: (text) => {
      dispatch(addTextToPublicationsCreator(text));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
