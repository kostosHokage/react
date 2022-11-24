import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Info, NotFound } from "../pages";

export default function Generate() {
  return (
    <>
      <header>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/Home">Home</Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/Info">Info</Link>
      </header>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
