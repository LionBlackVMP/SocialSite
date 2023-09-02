import React from "react";
import style from "./myPosts.module.scss";
import Post from "./post/post";

const MyPosts = (props) => {
  let postsElements = props.data.postsData.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();

  return (
    <div>
      <div>
        {" "}
        <textarea
          onChange={() => {
            props.addTextToTextarea(newPostElement.current.value);
          }}
          value={props.data.newPostText}
          ref={newPostElement}
        />
        <button
          onClick={() => {
            props.addPost();
          }}
        >
          add post
        </button>
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
