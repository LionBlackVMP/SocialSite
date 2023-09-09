import React from "react";
import style from "./myPosts.module.scss";
import Post from "./post/post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    props.addTextToPublications(newPostElement.current.value);
  };
  return (
    <div>
      <div>
        {" "}
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={onAddPost}>add post</button>
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
