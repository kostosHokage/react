import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GetPost, Home, Info, NotFound, OldTasks, Posts } from "../pages";

export default function Generate() {
  return (
    <>
      <header className="header">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/">Home</Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/Info">Info</Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/OldTasks">Old Tasks</Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/Posts">Posts</Link>
        <Link to="/GetPost">Get Post</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/OldTasks" element={<OldTasks />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/GetPost" element={<GetPost />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
