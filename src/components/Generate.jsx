import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Info, NotFound, OldTasks } from "../pages";

export default function Generate() {
  return (
    <>
      <header className="header">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/Home">Home</Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/Info">Info</Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/OldTasks">Old Tasks</Link>
      </header>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/OldTasks" element={<OldTasks />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
