import React from "react";
import style from "./myPosts.module.scss";
import Post from "./post/post";
import {
  addPostCreator,
  addTextToPublicationsCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.state.postsData.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  };
  let onPostChange = () => {
    props.dispatch(addTextToPublicationsCreator(newPostElement.current.value));
  };
  return (
    <div>
      <div>
        {" "}
        <textarea
          onChange={onPostChange}
          value={props.state.newPostText}
          ref={newPostElement}
        />
        <button onClick={addPost}>add post</button>
        new post
      </div>
      <div>
        Publications
        <div>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
