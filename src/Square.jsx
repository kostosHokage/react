import React from "react";
import "./App.css";

export default function Square() {
  const objects = [
    { id: 1, value: 1.2, color: "yellow" },
    { id: 2, value: "Sasha", color: "white" },
    { id: 3, value: "Kostya", color: "black" },
    { id: 4, value: 244, color: "grey" },
    { id: 5, value: 222, color: "yellow" },
    { id: 6, value: "Pasha", color: "red" },
    { id: 7, value: "Egor", color: "blue" },
    { id: 8, value: 10.002, color: "pink" },
    { id: 9, value: 12, color: "borrow" },
    { id: 10, value: "Developers", color: "black" },
  ];
  // let objectsCopy = [
  //     {id: 1, value: 12},
  //     {id: 2, value: 1},
  //     {id: 3, value: 2},
  //     {id: 4, value: 3},
  //     {id: 5, value: 4.3},
  //     {id: 6, value: 121},
  //     {id: 7, value: 33},
  //     {id: 8, value: 8},
  //     {id: 9, value: 12},
  //     {id: 10, value: 9},
  // ]

  return (
    <div className="container">
      {objects.map((el) => (
        <div
          className="square"
          style={{ backgroundColor: el.color }}
          key={el.id}
        >
          {el.value}
        </div>
      ))}
    </div>
  );
}
