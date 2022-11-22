import React from "react";

// eslint-disable-next-line react/prop-types
export default function ChildrenComponent({ children }) {
  return (
    <div>
      <h1>Hello! This is parent of children component!</h1>
      {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
      {children}
    </div>
  );
}
