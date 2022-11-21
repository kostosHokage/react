import React from "react";

export default function ChildrenComponent(props) {
  return (
    <div>
      <h1>Hello! This is parent of children component!</h1>
      {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
      {props.children}
    </div>
  );
}
