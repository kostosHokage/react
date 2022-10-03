import React from "react";
import "./App.css";

export default function Square() {
  // const objects = [
  //   { id: 1, value: 1.2, color: "yellow" },
  //   { id: 2, value: "Sasha", color: "white" },
  //   { id: 3, value: "Kostya", color: "green" },
  //   { id: 4, value: 244, color: "grey" },
  //   { id: 5, value: 222, color: "yellow" },
  //   { id: 6, value: "Pasha", color: "red" },
  //   { id: 7, value: "Egor", color: "blue" },
  //   { id: 8, value: 10.002, color: "pink" },
  //   { id: 9, value: 12, color: "borrow" },
  //   { id: 10, value: "Developers", color: "green" },
  // ];

  const objectsCopy = [
    { id: 1, value: 1 },
    { id: 2, value: 12 },
    { id: 3, value: -2 },
    { id: 4, value: 1 },
    { id: 5, value: -4 },
    { id: 6, value: 0 },
    { id: 7, value: -11 },
    { id: 8, value: 2 },
    { id: 9, value: 5 },
    { id: 10, value: 6 },
  ];

  function render(object) {
    return (
      <div className="object">
        {object
          .filter((obj) => obj.value >= 0 && obj.value <= 5)
          .map((filteredValue) => (
            <div className="square" style={{ backgroundColor: "yellow" }}>
              {filteredValue.value}
            </div>
          ))}
      </div>
    );
  }

  return <div className="container">{render(objectsCopy)}</div>;
}
