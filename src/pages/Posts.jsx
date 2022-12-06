import React, { useEffect, useState } from "react";
import { Post } from "../components";

export default function Posts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setItems(posts);
      });
  }, []);

  return (
    <div className="container">
      <div className="posts">
        {/* eslint-disable-next-line array-callback-return,consistent-return */}
        {items.map((newPosts) => {
          if (newPosts.id < 38) {
            return (
              <Post
                key={newPosts.id}
                title={newPosts.title}
                body={newPosts.body}
                id={newPosts.id}
              />
            );
          }
          if (newPosts.id === 77) {
            return (
              <div className="post">
                <div>Post id: {newPosts.id}</div>
                <div className="post__title">{newPosts.title}</div>
                <div className="post__content">{newPosts.body}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
