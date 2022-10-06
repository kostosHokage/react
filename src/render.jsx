import React from "react";

export function render(array) {
  return (
    <div className="object">
      {array.map((filteredValue) => {
        if (filteredValue.value < 0) {
          return (
            <div
              className="square"
              key={filteredValue.id}
              style={{ backgroundColor: "red" }}
            >
              {filteredValue.value}
            </div>
          );
        }
        if (filteredValue.value >= 0 && filteredValue.value <= 5) {
          return (
            <div
              className="square"
              key={filteredValue.id}
              style={{ backgroundColor: "yellow" }}
            >
              {filteredValue.value}
            </div>
          );
        }
        return (
          <div
            className="square"
            key={filteredValue.id}
            style={{ backgroundColor: "green" }}
          >
            {filteredValue.value}
          </div>
        );
      })}
    </div>
  );
}
