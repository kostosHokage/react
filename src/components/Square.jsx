import React from "react";
import "../App.css";
import { render } from "../render";

export default function Square() {
  const objectsCopy = [
    { id: 1, value: 1 },
    { id: 2, value: 12 },
    { id: 3, value: -2 },
    { id: 4, value: 5 },
    { id: 5, value: -44 },
    { id: 6, value: 1112 },
    { id: 7, value: -11 },
    { id: 8, value: 2 },
    { id: 9, value: -22 },
    { id: 10, value: 6 },
  ];

  return <div>{render(objectsCopy)}</div>;
}
