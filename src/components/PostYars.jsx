import React from "react";
import Note from "./NoteYars";

const Post = ({ posts, title }) => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}> {title} </h3>
      {posts.map((post) => (
        <Note dictProps={post} key={post.id} />
      ))}
    </div>
  );
};

export default Post;
