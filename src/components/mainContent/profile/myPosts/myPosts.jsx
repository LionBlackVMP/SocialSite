import React from "react";
import style from "./myPosts.module.scss";
import Post from "./post/post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hello world!", likesCount: 5 },
    { id: 1, message: "Hi man, how are u?", likesCount: 2 },
    { id: 1, message: "Completely fine", likesCount: 15 },
  ];
  let postsElements = postsData.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div>
      <div>
        {" "}
        <textarea>what you think about?</textarea>
        <button>add post</button>
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
