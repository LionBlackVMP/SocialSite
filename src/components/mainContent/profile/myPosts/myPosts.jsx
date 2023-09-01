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
        <textarea name="what you think about?" ref={newPostElement} />
        <button
          onClick={() => {
            props.addPost(newPostElement.current.value);
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
