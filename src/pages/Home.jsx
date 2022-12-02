import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="links-page">
        <h1>Welcome to the Home page!</h1>
        <div className="links-page__content">
          <Link to="/">Home</Link>
          <Link to="/Info">Info</Link>
          <Link to="/OldTasks">Old Tasks</Link>
          <Link to="/Posts">Posts</Link>
          <Link to="/GetPost">Get Post</Link>
        </div>
      </div>
    </div>
  );
}
