import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
      <div className="links-page">
        <h1>Welcome to the Home page!</h1>
        <div className="links-page__content">
          <Link to="/">Home</Link>
          <Link to="/Info">Info</Link>
          <Link to="/OldTasks">Old Tasks</Link>
        </div>
        <div className="posts">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {items.map((newPosts) => {
            if (newPosts.id < 38) {
              return (
                <div className="post" key={newPosts.id}>
                  <div className="post__title">
                    <b>Название: </b>
                    {newPosts.title}
                  </div>
                  <div className="post__content">{newPosts.body}</div>
                </div>
              );
            }
            if (newPosts.id === 77) {
              return (
                <div className="post">
                  <div>Post id: {newPosts.id}</div>
                  <div className="post__title">
                    <b>Название: </b>
                    {newPosts.title}
                  </div>
                  <div className="post__content">{newPosts.body}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
